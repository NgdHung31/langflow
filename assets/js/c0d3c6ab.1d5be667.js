"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[2431],{82746:(o,e,n)=>{n.r(e),n.d(e,{CH:()=>p,assets:()=>a,chCodeConfig:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>h});var t=n(74848),s=n(28453),r=n(24754);const l={title:"Run Langflow in backend-only mode",slug:"/configuration-backend-only"},c=void 0,i={id:"Configuration/configuration-backend-only",title:"Run Langflow in backend-only mode",description:"Langflow can run in --backend-only mode to expose a Langflow app as an API endpoint, without running the frontend UI.",source:"@site/docs/Configuration/configuration-backend-only.md",sourceDirName:"Configuration",slug:"/configuration-backend-only",permalink:"/configuration-backend-only",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Run Langflow in backend-only mode",slug:"/configuration-backend-only"},sidebar:"docs",previous:{title:"Auto-saving",permalink:"/configuration-auto-save"},next:{title:"Langflow CLI",permalink:"/configuration-cli"}},a={},p={annotations:r.hk,Code:r.Cy},d={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},h=[{value:"Set up a basic prompting flow in backend-only mode",id:"set-up-a-basic-prompting-flow-in-backend-only-mode",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Get your flow&#39;s ID",id:"get-your-flows-id",level:3},{value:"Start Langflow in backend-only mode",id:"start-langflow-in-backend-only-mode",level:3},{value:"Query the Langflow endpoint with a Python script",id:"query-the-langflow-endpoint-with-a-python-script",level:3},{value:"Configure host and ports in backend-only mode",id:"configure-host-and-ports-in-backend-only-mode",level:3}];function u(o){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...o.components};return p||f("CH",!1),p.Code||f("CH.Code",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,t.jsxs)(e.p,{children:["Langflow can run in ",(0,t.jsx)(e.code,{children:"--backend-only"}),' mode to expose a Langflow app as an API endpoint, without running the frontend UI.\nThis is also known as "headless" mode. Running Langflow without the frontend is useful for automation, testing, and situations where you just need to serve a flow as a workload without creating a new flow in the UI.']}),"\n",(0,t.jsxs)(e.p,{children:["To run Langflow in backend-only mode, pass the ",(0,t.jsx)(e.code,{children:"--backend-only"})," flag at startup."]}),"\n",(0,t.jsx)(p.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"python3 ",props:{style:{color:"#C9D1D9"}}},{content:"-",props:{style:{color:"#FF7B72"}}},{content:"m langflow run ",props:{style:{color:"#C9D1D9"}}},{content:"--",props:{style:{color:"#FFA198",fontStyle:"italic"}}},{content:"backend",props:{style:{color:"#C9D1D9"}}},{content:"-",props:{style:{color:"#FF7B72"}}},{content:"only",props:{style:{color:"#C9D1D9"}}}]}],lang:"python"},annotations:[]}]}),"\n",(0,t.jsxs)(e.p,{children:["The terminal prints ",(0,t.jsx)(e.code,{children:"Welcome to \u26d3 Langflow"}),", and Langflow will now serve requests to its API without the frontend running."]}),"\n",(0,t.jsx)(e.h2,{id:"set-up-a-basic-prompting-flow-in-backend-only-mode",children:"Set up a basic prompting flow in backend-only mode"}),"\n",(0,t.jsxs)(e.p,{children:["This example shows you how to set up a ",(0,t.jsx)(e.a,{href:"/starter-projects-basic-prompting",children:"Basic Prompting flow"})," as an endpoint in backend-only mode.\nHowever, you can use these same instructions as guidelines for using any type of flow in backend-only mode."]}),"\n",(0,t.jsx)(e.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/get-started-installation",children:"Langflow is installed"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://platform.openai.com/",children:"You have an OpenAI API key"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/starter-projects-basic-prompting",children:"You have a Langflow Basic Prompting flow"})}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"get-your-flows-id",children:"Get your flow's ID"}),"\n",(0,t.jsxs)(e.p,{children:["This guide assumes you have created a ",(0,t.jsx)(e.a,{href:"/starter-projects-basic-prompting",children:"Basic Prompting flow"})," or have another working flow available."]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["In the Langflow UI, click ",(0,t.jsx)(e.strong,{children:"API"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["Click ",(0,t.jsx)(e.strong,{children:"curl"})," > ",(0,t.jsx)(e.strong,{children:"Copy code"})," to copy the curl command.\nThis command will POST input to your flow's endpoint.\nIt will look something like this:"]}),"\n"]}),"\n",(0,t.jsx)(p.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"curl -X POST \\",props:{}}]},{tokens:[{content:'    "http://127.0.0.1:7861/api/v1/run/fff8dcaa-f0f6-4136-9df0-b7cb38de42e0?stream=false" \\',props:{}}]},{tokens:[{content:"    -H 'Content-Type: application/json'\\",props:{}}]},{tokens:[{content:'    -d \'{"input_value": "message",',props:{}}]},{tokens:[{content:'    "output_type": "chat",',props:{}}]},{tokens:[{content:'    "input_type": "chat",',props:{}}]},{tokens:[{content:'    "tweaks": {',props:{}}]},{tokens:[{content:'  "ChatInput-8a86T": {},',props:{}}]},{tokens:[{content:'  "Prompt-pKfl9": {},',props:{}}]},{tokens:[{content:'  "ChatOutput-WcGpD": {},',props:{}}]},{tokens:[{content:'  "OpenAIModel-5UyvQ": {}',props:{}}]},{tokens:[{content:"}}'",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,t.jsxs)(e.p,{children:["The flow ID in this example is ",(0,t.jsx)(e.code,{children:"fff8dcaa-f0f6-4136-9df0-b7cb38de42e0"}),", a UUID generated by Langflow and used in the endpoint URL.\nSee ",(0,t.jsx)(e.a,{href:"/configuration-api-keys",children:"API"})," to change the endpoint."]}),"\n",(0,t.jsxs)(e.ol,{start:"3",children:["\n",(0,t.jsxs)(e.li,{children:["To stop Langflow, press ",(0,t.jsx)(e.strong,{children:"Ctrl+C"}),"."]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"start-langflow-in-backend-only-mode",children:"Start Langflow in backend-only mode"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Start Langflow in backend-only mode."}),"\n"]}),"\n",(0,t.jsx)(p.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"python3 ",props:{style:{color:"#C9D1D9"}}},{content:"-",props:{style:{color:"#FF7B72"}}},{content:"m langflow run ",props:{style:{color:"#C9D1D9"}}},{content:"--",props:{style:{color:"#FFA198",fontStyle:"italic"}}},{content:"backend",props:{style:{color:"#C9D1D9"}}},{content:"-",props:{style:{color:"#FF7B72"}}},{content:"only",props:{style:{color:"#C9D1D9"}}}]}],lang:"python"},annotations:[]}]}),"\n",(0,t.jsxs)(e.p,{children:["The terminal prints ",(0,t.jsx)(e.code,{children:"Welcome to \u26d3 Langflow"}),".\nLangflow is now serving requests to its API."]}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsx)(e.li,{children:"Run the curl code you copied from the UI.\nYou should get a result like this:"}),"\n"]}),"\n",(0,t.jsx)(p.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"{",props:{style:{color:"#C9D1D9"}}},{content:'"session_id"',props:{style:{color:"#FFA657"}}},{content:":",props:{style:{color:"#79C0FF"}}},{content:'"ef7e0554-69e5-4e3e-ab29-ee83bcd8d9ef:bf81d898868ac87e1b4edbd96c131c5dee801ea2971122cc91352d144a45b880","outputs"',props:{style:{color:"#FFA657"}}},{content:":",props:{style:{color:"#79C0FF"}}},{content:'[{"',props:{style:{color:"#C9D1D9"}}},{content:'inputs":{"input_value":"hi, ',props:{style:{color:"#FFA657"}}},{content:'are you there?"},"outputs":[{"results":{"result":"Arrr, ahoy matey! Aye, I be here. What be ye needin\', me hearty?"},"artifacts":{"message":"Arrr, ahoy matey! Aye, I be here. What be ye needin\', me hearty?","sender":"Machine","sender_name":"AI"},"messages":[{"message":"Arrr, ahoy matey! Aye, I be here. What be ye needin\', me hearty?","sender":"Machine","sender_name":"AI","component_id":"ChatOutput-ktwdw"}],"component_display_name":"Chat Output","component_id":"ChatOutput-ktwdw","used_frozen_result":false}]}]}%',props:{style:{color:"#A5D6FF"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,t.jsx)(e.p,{children:"This confirms Langflow is receiving your POST request, running the flow, and returning the result without running the frontend."}),"\n",(0,t.jsxs)(e.p,{children:["You can interact with this endpoint using the other options in the ",(0,t.jsx)(e.strong,{children:"API"})," menu, including the Python and Javascript APIs."]}),"\n",(0,t.jsx)(e.h3,{id:"query-the-langflow-endpoint-with-a-python-script",children:"Query the Langflow endpoint with a Python script"}),"\n",(0,t.jsx)(e.p,{children:"Using the same flow ID, run a Python sample script to send a query and get a prettified JSON response back."}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["Create a Python file and name it ",(0,t.jsx)(e.code,{children:"langflow_api_demo.py"}),"."]}),"\n"]}),"\n",(0,t.jsx)(p.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"import",props:{style:{color:"#FF7B72"}}},{content:" requests",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"import",props:{style:{color:"#FF7B72"}}},{content:" json",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"def ",props:{style:{color:"#FF7B72"}}},{content:"query_langflow",props:{style:{color:"#D2A8FF"}}},{content:"(message):",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    url ",props:{style:{color:"#C9D1D9"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:'"http://127.0.0.1:7861/api/v1/run/fff8dcaa-f0f6-4136-9df0-b7cb38de42e0"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    headers ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" {",props:{style:{color:"#C9D1D9"}}},{content:'"Content-Type"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"application/json"',props:{style:{color:"#A5D6FF"}}},{content:"}",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    data ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" {",props:{style:{color:"#C9D1D9"}}},{content:'"input_value"',props:{style:{color:"#A5D6FF"}}},{content:": message}",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    response ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" requests.post(url, ",props:{style:{color:"#C9D1D9"}}},{content:"headers",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"headers, ",props:{style:{color:"#C9D1D9"}}},{content:"json",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"data)",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    return",props:{style:{color:"#FF7B72"}}},{content:" response.json()",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"user_input ",props:{style:{color:"#C9D1D9"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:"input",props:{style:{color:"#79C0FF"}}},{content:"(",props:{style:{color:"#C9D1D9"}}},{content:'"Enter your message: "',props:{style:{color:"#A5D6FF"}}},{content:")",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"result ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" query_langflow(user_input)",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"print",props:{style:{color:"#79C0FF"}}},{content:"(json.dumps(result, ",props:{style:{color:"#C9D1D9"}}},{content:"indent",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"2",props:{style:{color:"#79C0FF"}}},{content:"))",props:{style:{color:"#C9D1D9"}}}]}],lang:"python"},annotations:[]}]}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsx)(e.li,{children:"Run the script."}),"\n"]}),"\n",(0,t.jsx)(p.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"python langflow_api_demo.py",props:{style:{color:"#C9D1D9"}}}]}],lang:"python"},annotations:[]}]}),"\n",(0,t.jsxs)(e.ol,{start:"3",children:["\n",(0,t.jsx)(e.li,{children:"Enter your message when prompted.\nYou will get a prettified JSON response back containing a response to your message."}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"configure-host-and-ports-in-backend-only-mode",children:"Configure host and ports in backend-only mode"}),"\n",(0,t.jsx)(e.p,{children:"To change the host and port, pass the values as additional flags."}),"\n",(0,t.jsx)(p.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"python ",props:{style:{color:"#C9D1D9"}}},{content:"-",props:{style:{color:"#FF7B72"}}},{content:"m langflow run ",props:{style:{color:"#C9D1D9"}}},{content:"--",props:{style:{color:"#FFA198",fontStyle:"italic"}}},{content:"host ",props:{style:{color:"#C9D1D9"}}},{content:"127.0",props:{style:{color:"#79C0FF"}}},{content:".0.1 ",props:{style:{color:"#C9D1D9"}}},{content:"--",props:{style:{color:"#FFA198",fontStyle:"italic"}}},{content:"port ",props:{style:{color:"#C9D1D9"}}},{content:"7860 ",props:{style:{color:"#79C0FF"}}},{content:"--",props:{style:{color:"#FFA198",fontStyle:"italic"}}},{content:"backend",props:{style:{color:"#C9D1D9"}}},{content:"-",props:{style:{color:"#FF7B72"}}},{content:"only",props:{style:{color:"#C9D1D9"}}}]}],lang:"python"},annotations:[]}]})]})}function y(o={}){const{wrapper:e}={...(0,s.R)(),...o.components};return e?(0,t.jsx)(e,{...o,children:(0,t.jsx)(u,{...o})}):u(o)}function f(o,e){throw new Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);