// A browser-only transport adapter. No network socket is opened.
(()=>{
class LocalWebSocket {
 static CONNECTING=0;static OPEN=1;static CLOSING=2;static CLOSED=3;
 constructor(url){
   this.url=url;this.readyState=LocalWebSocket.CONNECTING;this.binaryType='arraybuffer';this.closed=false;
   this.worker=new Worker('/arena-worker.js');
   this.worker.onmessage=e=>{if(!this.closed)this.onmessage?.({data:JSON.stringify(e.data)});};
   this.worker.onerror=e=>{if(!this.closed)this.onerror?.(e);};
   setTimeout(()=>{if(this.closed)return;this.readyState=LocalWebSocket.OPEN;this.onopen?.();},0);
 }
 send(data){
   if(this.readyState!==LocalWebSocket.OPEN)return;
   if(data instanceof ArrayBuffer||ArrayBuffer.isView(data)){
     const bytes=data instanceof ArrayBuffer?new Uint8Array(data):new Uint8Array(data.buffer,data.byteOffset,data.byteLength);
     if(bytes[0]!==73)return;let i=1;while(i<bytes.length&&(bytes[i++]&128)){}if(i+5>bytes.length)return;
     const view=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength);
     this.worker.postMessage({type:'input',dx:view.getInt16(i,true)/32767,dy:view.getInt16(i+2,true)/32767,boost:!!bytes[i+4]});return;
   }
   let message;try{message=JSON.parse(data)}catch{return;}
   if(message.type==='hello')message.config={...(window.__VIPER_LOCAL_CONFIG__||{}),...(message.config||{})};
   this.worker.postMessage(message);
 }
 close(){if(this.closed)return;this.closed=true;this.readyState=LocalWebSocket.CLOSED;this.worker.terminate();this.onclose?.({code:1000,reason:'local'});}
}
for(const key of ['CONNECTING','OPEN','CLOSING','CLOSED'])Object.defineProperty(LocalWebSocket.prototype,key,{value:LocalWebSocket[key]});
window.WebSocket=LocalWebSocket;
window.__VIPER_STATIC__=true;
})();
