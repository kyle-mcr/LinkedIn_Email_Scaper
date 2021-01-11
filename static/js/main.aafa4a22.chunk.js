(this.webpackJsonpdevdb_chrome_ext=this.webpackJsonpdevdb_chrome_ext||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);

var c=n(1),
    s=n(2),
    a=n.n(s),
    r=n(6),
    i=n.n(r),
    o=(n(16),
        n(5)),
    d=n.n(o),
    u=n(7),
    j=n(3),
    l=n(8),
    b=n(9),
    m=n(10),

p = function() {
    var e=Object(s.useState)(),
        t=Object(j.a)(e,2),
        n=t[0],
        a=t[1],
        r=Object(s.useState)(),
        i=Object(j.a)(r,2),
        o=i[0],p=i[1],
        h=Object(s.useState)(),
        O=Object(j.a)(h,2),
        x=O[0],v=O[1],
        f=Object(s.useState)(),
        y=Object(j.a)(f,2),
        w=y[0],
        g=y[1],
        C=Object(s.useState)(!0),
        N=Object(j.a)(C,2),
        k=N[0],
        S=N[1],

            E = function(e) {
                e.currentTarget.style.backgroundColor="lightgrey"
            },
            M = function(e) {
                var t=e.currentTarget;
                setTimeout((function() {
                    t.style.backgroundColor="white"}),100
                    )},
            T = function(e) {
                var t=document.createElement("div");
                t.classList.add("popup");
                var n=document.createElement("div");

                n.textContent=e,t.appendChild(n),
                document.body.appendChild(t),
                t.animate([{opacity:.2},{opacity:1}],400),setTimeout((function() {
                                                                        t.animate([{opacity:1},{opacity:.2}],400)}),2e3),
                                                                        setTimeout((function(){document.body.removeChild(t)}),2375)
                };
                return Object(s.useEffect)((function() {
                    window.chrome.runtime.onMessage.addListener((function(e,t,n) {
                        "info_response"===e.message&&(e.error?(g(e.error),S(!1)):function(e,t) {
                                                                                    return new Promise((function(n) {
                                                                                        p(e),
                                                                                        v(t),
                                                                                        n({name:e,company:t})
                                                                                    }))
}(e.name,e.company).then((function(e) {
                            return function(e){ 
                                var t=e.name,
                                n=e.company,
                                c={method:"POST",
                                    headers:{"Content-Type":"application/json"},
                                    body:JSON.stringify({name:t,company:n})};
                                    fetch("http://104.236.17.95:4000/generate",c).then(function() {
                                                                                        var e=Object(u.a)(d.a.mark((function e(t) { 
                                                                                                                        var n;
                                                                                                                        return d.a.wrap((function(e) {
                                                                                                                                            for(;;)switch(e.prev=e.next){
                                                                                                                                                    case 0:if(t){e.next=2;
                                                                                                                                                        break
                                                                                                                                                    } return e.abrupt("return",null);
                                                                                                                                                    case 2:return e.next=4,t.json();
                                                                                                                                                    case 4:if(n=e.sent){e.next=7;
                                                                                                                                                        break
                                                                                                                                                    } return e.abrupt("return",null);
                                                                                                                                                    case 7:return e.abrupt("return",n);
                                                                                                                                                    case 8:case"end":return e.stop()}}),e)
                                                                                                                                    })
                                                                                                            ));
                                                                                            return function(t) {
                                                                                                return e.apply(this,arguments)
                                                                                            }
                                                                                        }
                                                                                    ()).then((function(e) {
                                                                                        
                                                                                        var db = 'developerdb.com';
                                                                                    
                                                                                        e&&e[0]&&""!==e[0]?a(e[0]):g("We\'re sorry, we were not able to produce an email for this user.\
                                                                                        If you require personal emails that are verified, consider using our other chrome extension at " + db)
                                                                                                }
                                                                                                )
                                                                                            ).then((function(){ 
                                                                                                S(!1)})).catch((function(e) {
                                                                                                                    var t=e.message;
                                                                                                                    console.log(t),
                                                                                                                                g(t),
                                                                                                                                S(!1)
                                                                                                                            }))}(e)})))})
                                                                    ),window.chrome.tabs.query({currentWindow:!0,active:!0},
                                (function(e) {
                                    var t=e[0];
                                    window.chrome.tabs.sendMessage(t.id,{message:"scrape"})}))

                            }),[]),
                            Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{
                                                                                className:"header",
                                                                                children:[Object(c.jsx)("h1",
                                                                                                {children:"LinkedIn Email"}),
                                                                                                    Object(c.jsx)(l.a,{size:20,style:{cursor:"pointer"},onClick:function(){return window.close()}})
                                                                                        ]}
                                                                                ),
Object(c.jsx)("div",{
className:"main",
children:k?Object(c.jsxs)("div",{
                                class:"lds-default",
                                children:[Object(c.jsx)("div",{}),
                                          Object(c.jsx)("div",{}),
                                          Object(c.jsx)("div",{}),
                                          Object(c.jsx)("div",{}),
                                          Object(c.jsx)("div",{}),
                                          Object(c.jsx)("div",{}),
                                          Object(c.jsx)("div",{}),
                                          Object(c.jsx)("div",{}),
                                          Object(c.jsx)("div",{}),
                                          Object(c.jsx)("div",{}),
                                          Object(c.jsx)("div",{}),
                                          Object(c.jsx)("div",{})
                                        ]
                                    })
            :w?Object(c.jsx)("div",{className:"popup-text error",
                                     children:w
                                    })
            :o&&x&&n?Object(c.jsxs)("div",{className:"results-content",
                                            children:[Object(c.jsxs)("div",{className:"popup-text",
                                                                             children:["We predict that\xa0",Object(c.jsx)("span",{className:"name-text",children:o}),"'s email, who works at\xa0",Object(c.jsx)
                                                                             ("span",{className:"company-text",children:x}),", is"]
                                                                            }),Object(c.jsxs)("div",{className:"email-content",
                                                                                                      children:[Object(c.jsx)("h2",{children:n}),
                                                                                                                Object(c.jsxs)("div",{className:"email-buttons",children:[Object(c.jsx)("div",{onClick:function(){var e=document.createElement("input");e.style.display="hidden",document.body.appendChild(e),e.value=n,e.select(),document.execCommand("copy"),T("Email copied to clipboard"),document.body.removeChild(e)},onMouseDown:E,onMouseUp:M,children:Object(c.jsx)(b.a,{size:25})}),Object(c.jsx)("a",{href:"mailto:".concat(n),onMouseDown:E,onMouseUp:M,children:Object(c.jsx)(m.a,{size:25})}),"If you require personal emails that are verified, consider using our other chrome extension at developerdb.com"]})]})]}):null})]})};var h=function(){return Object(c.jsx)("div",{className:"app",children:Object(c.jsx)(p,{})})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.aafa4a22.chunk.js.map
