import "./index.css";
import "./glassform.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { analyzeRisk } from "./services/clarityAPI";

const ding = () => {
  const a = new Audio("/ding.mp3");
  a.volume = 0.4;
  a.play();
};

export default function App() {
  const [leak,   setLeak]   = useState("");
  const [names,  setNames]  = useState("");
  const [sumry,  setSumry]  = useState("");
  const [data,   setData]   = useState(null);
  const [err,    setErr]    = useState("");
  const [spin,   setSpin]   = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSpin(true); setErr(""); setData(null);
    try {
      const prompt = `INPUT: ${leak} breaches: ${names}, LinkedIn: ${sumry}.`;
      const result = await analyzeRisk(prompt);
      setData(result);
      ding();
    } catch (e) {
      console.error(e);
      setErr("❌ Failed to connect.");
    }
    setSpin(false);
  };

  return (
    <div className="glass-wrapper">
      <form className="form" onSubmit={onSubmit} autoComplete="off">
        {/* header */}
        <div className="header-wrapper">
          <img src="/shield.jpg" alt="shield" className="shield-icon-glow" />
          <h1 className="title-glow">ClarityBot</h1>
          <p className="subtitle">Cyber Risk Analyzer</p>
        </div>

        {/* inputs */}
        {[
          {ph:"Leak count", val:leak,  set:setLeak,  type:"number"},
          {ph:"Breach names", val:names, set:setNames},
          {ph:"LinkedIn summary", val:sumry, set:setSumry},
        ].map((f,i)=>(<div key={i} className="control block-cube block-input">
          <input required type={f.type||"text"} placeholder={f.ph}
                 value={f.val} onChange={e=>f.set(e.target.value)} />
          <div className="bg-top"><div className="bg-inner"/></div>
          <div className="bg-right"><div className="bg-inner"/></div>
          <div className="bg"><div className="bg-inner"/></div>
        </div>))}

        {/* button */}
        <button disabled={spin}
          className="btn block-cube block-cube-hover">
          <div className="bg-top"><div className="bg-inner"/></div>
          <div className="bg-right"><div className="bg-inner"/></div>
          <div className="bg"><div className="bg-inner"/></div>
          <div className="text">{spin? "Analyzing…" : "Analyze Risk"}</div>
        </button>

        {/* error */}
        {err && <p className="mt-4 text-red-500 text-sm">{err}</p>}

        {/* result */}
        {data && (
          <motion.div className="mt-8 space-y-3"
              initial={{opacity:0,scale:0.9}}
              animate={{opacity:1,scale:1}}
              transition={{duration:0.4}}>
            <span className={`px-3 py-1 text-sm rounded-full font-semibold ${
              data.risk_rating==="High"   ? "bg-red-600 text-white" :
              data.risk_rating==="Medium" ? "bg-yellow-400 text-black" :
                                            "bg-green-500 text-white"}`}>
              {data.risk_rating}
            </span>

            <h3 className="text-lg font-semibold">{data.priority_fix}</h3>

            <ol className="list-decimal ml-5 space-y-1 text-gray-200 text-sm">
              {data.action_plan.map((step,i)=>(
                <li key={i}>{step}</li>
              ))}
            </ol>
          </motion.div>
        )}
      </form>
    </div>
  );
}
