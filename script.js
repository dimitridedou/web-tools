const firebaseConfig={apiKey:"AIzaSyAy49lJTcgXi4M_OVF8ccz6UPldjo7wnEU",authDomain:"my-form-b4967.firebaseapp.com",projectId:"my-form-b4967",storageBucket:"my-form-b4967.appspot.com",messagingSenderId:"510396488382",appId:"1:510396488382:web:0b81b68ea6aa5ad026dcef"};firebase["initializeApp"](firebaseConfig);const contactForm=document["getElementById"]('contactForm');contactForm["addEventListener"]('submit',async (_0xe316x2)=>{_0xe316x2["preventDefault"]();const _0xe316x3= new FormData(contactForm);const _0xe316x4=_0xe316x3["get"]('name');const _0xe316x5=_0xe316x3["get"]('email');const _0xe316x6=_0xe316x3["get"]('message');const _0xe316x7=firebase["firestore"](); await _0xe316x7["collection"]('messages')["add"]({name:_0xe316x4,email:_0xe316x5,message:_0xe316x6,timestamp:firebase["firestore"]["FieldValue"]["serverTimestamp"]()});contactForm["reset"]();alert('\u03a4\u03bf \u03bc\u03ae\u03bd\u03c5\u03bc\u03b1 \u03c3\u03b1\u03c2 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03cd\u03c4\u03b7\u03ba\u03b5 \u03bc\u03b5 \u03b5\u03c0\u03b9\u03c4\u03c5\u03c7\u03af\u03b1!')})
