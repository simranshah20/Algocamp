//NOTE: This Component is slow to render
const waitingForSomething=(ms)=>{
      const start=Date.now();
      let now=start;
      while(now - start < ms) {
        now=Date.now();
      }
}   

export default function AnotherSlowComponent({children}){
    waitingForSomething(1000);
    custom();
        return null;
}