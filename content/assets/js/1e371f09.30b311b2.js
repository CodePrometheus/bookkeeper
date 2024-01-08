"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[3845],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||k[h]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},31315:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return p}});var o=n(83117),a=(n(67294),n(3905));const r={id:"sasl",title:"Authentication using SASL"},i=void 0,s={unversionedId:"security/sasl",id:"version-4.15.5/security/sasl",title:"Authentication using SASL",description:"Bookies support client authentication via SASL. Currently we only support GSSAPI (Kerberos). We will start",source:"@site/versioned_docs/version-4.15.5/security/sasl.md",sourceDirName:"security",slug:"/security/sasl",permalink:"/docs/4.15.5/security/sasl",draft:!1,tags:[],version:"4.15.5",frontMatter:{id:"sasl",title:"Authentication using SASL"},sidebar:"docsSidebar",previous:{title:"Encryption and Authentication using TLS",permalink:"/docs/4.15.5/security/tls"},next:{title:"ZooKeeper Authentication",permalink:"/docs/4.15.5/security/zookeeper"}},l={},p=[{value:"SASL configuration for Bookies",id:"sasl-configuration-for-bookies",level:2},{value:"Important Notes",id:"notes",level:4},{value:"SASL configuration for Clients",id:"sasl-configuration-for-clients",level:2},{value:"Authentication using SASL/Kerberos",id:"kerberos",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Kerberos",id:"kerberos",level:4},{value:"Kerberos Principals",id:"kerberos-principals",level:4},{value:"All hosts must be reachable using hostnames",id:"all-hosts-must-be-reachable-using-hostnames",level:5},{value:"Configuring Bookies",id:"configuring-bookies",level:3},{value:"Configuring Clients",id:"configuring-clients",level:3},{value:"Enabling Logging for SASL",id:"enabling-logging-for-sasl",level:2}],c={toc:p},u="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Bookies support client authentication via SASL. Currently we only support GSSAPI (Kerberos). We will start\nwith a general description of how to configure ",(0,a.kt)("inlineCode",{parentName:"p"},"SASL")," for bookies, clients and autorecovery daemons, followed\nby mechanism-specific details and wrap up with some operational details."),(0,a.kt)("h2",{id:"sasl-configuration-for-bookies"},"SASL configuration for Bookies"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the mechanisms to enable in the bookies. ",(0,a.kt)("inlineCode",{parentName:"p"},"GSSAPI")," is the only mechanism currently supported by BookKeeper.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add a ",(0,a.kt)("inlineCode",{parentName:"p"},"JAAS")," config file for the selected mechanisms as described in the examples for setting up ",(0,a.kt)("a",{parentName:"p",href:"#kerberos"},"GSSAPI (Kerberos)"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"JAAS")," config file location as JVM parameter to each Bookie. For example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"-Djava.security.auth.login.config=/etc/bookkeeper/bookie_jaas.conf \n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enable SASL auth plugin in bookies, by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"bookieAuthProviderFactoryClass")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.bookkeeper.sasl.SASLBookieAuthProviderFactory"),"."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```shell\nbookieAuthProviderFactoryClass=org.apache.bookkeeper.sasl.SASLBookieAuthProviderFactory\n```\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you are running ",(0,a.kt)("inlineCode",{parentName:"p"},"autorecovery")," along with bookies, then you want to enable SASL auth plugin for ",(0,a.kt)("inlineCode",{parentName:"p"},"autorecovery"),", by setting\n",(0,a.kt)("inlineCode",{parentName:"p"},"clientAuthProviderFactoryClass")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.bookkeeper.sasl.SASLClientProviderFactory"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"clientAuthProviderFactoryClass=org.apache.bookkeeper.sasl.SASLClientProviderFactory\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Follow the steps in ",(0,a.kt)("a",{parentName:"p",href:"#kerberos"},"GSSAPI (Kerberos)")," to configure SASL."))),(0,a.kt)("h4",{id:"notes"},"Important Notes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Bookie")," is a section name in the JAAS file used by each bookie. This section tells the bookie which principal to use\nand the location of the keytab where the principal is stored. It allows the bookie to login using the keytab specified in this section."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Auditor")," is a section name in the JASS file used by ",(0,a.kt)("inlineCode",{parentName:"li"},"autorecovery")," daemon (it can be co-run with bookies). This section tells the\n",(0,a.kt)("inlineCode",{parentName:"li"},"autorecovery")," daemon which principal to use and the location of the keytab where the principal is stored. It allows the bookie to\nlogin using the keytab specified in this section."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Client")," section is used to authenticate a SASL connection with ZooKeeper. It also allows the bookies to set ACLs on ZooKeeper nodes\nwhich locks these nodes down so that only the bookies can modify it. It is necessary to have the same primary name across all bookies.\nIf you want to use a section name other than ",(0,a.kt)("inlineCode",{parentName:"li"},"Client"),", set the system property ",(0,a.kt)("inlineCode",{parentName:"li"},"zookeeper.sasl.client")," to the appropriate name\n(e.g ",(0,a.kt)("inlineCode",{parentName:"li"},"-Dzookeeper.sasl.client=ZKClient"),")."),(0,a.kt)("li",{parentName:"ol"},"ZooKeeper uses ",(0,a.kt)("inlineCode",{parentName:"li"},"zookeeper")," as the service name by default. If you want to change this, set the system property\n",(0,a.kt)("inlineCode",{parentName:"li"},"zookeeper.sasl.client.username")," to the appropriate name (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"-Dzookeeper.sasl.client.username=zk"),").")),(0,a.kt)("h2",{id:"sasl-configuration-for-clients"},"SASL configuration for Clients"),(0,a.kt)("p",null,"To configure ",(0,a.kt)("inlineCode",{parentName:"p"},"SASL")," authentication on the clients:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select a ",(0,a.kt)("inlineCode",{parentName:"p"},"SASL")," mechanism for authentication and add a ",(0,a.kt)("inlineCode",{parentName:"p"},"JAAS")," config file for the selected mechanism as described in the examples for\nsetting up ",(0,a.kt)("a",{parentName:"p",href:"#kerberos"},"GSSAPI (Kerberos)"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"JAAS")," config file location as JVM parameter to each client JVM. For example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"-Djava.security.auth.login.config=/etc/bookkeeper/bookkeeper_jaas.conf \n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure the following properties in bookkeeper ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientConfiguration"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"clientAuthProviderFactoryClass=org.apache.bookkeeper.sasl.SASLClientProviderFactory\n")))),(0,a.kt)("p",null,"Follow the steps in ",(0,a.kt)("a",{parentName:"p",href:"#kerberos"},"GSSAPI (Kerberos)")," to configure SASL for the selected mechanism."),(0,a.kt)("h2",{id:"kerberos"},"Authentication using SASL/Kerberos"),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h4",{id:"kerberos"},"Kerberos"),(0,a.kt)("p",null,"If your organization is already using a Kerberos server (for example, by using ",(0,a.kt)("inlineCode",{parentName:"p"},"Active Directory"),"), there is no need to\ninstall a new server just for BookKeeper. Otherwise you will need to install one, your Linux vendor likely has packages\nfor ",(0,a.kt)("inlineCode",{parentName:"p"},"Kerberos")," and a short guide on how to install and configure it (",(0,a.kt)("a",{parentName:"p",href:"https://help.ubuntu.com/community/Kerberos"},"Ubuntu"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Managing_Smart_Cards/installing-kerberos.html"},"Redhat"),").\nNote that if you are using Oracle Java, you will need to download JCE policy files for your Java version and copy them to ",(0,a.kt)("inlineCode",{parentName:"p"},"$JAVA_HOME/jre/lib/security"),"."),(0,a.kt)("h4",{id:"kerberos-principals"},"Kerberos Principals"),(0,a.kt)("p",null,"If you are using the organization\u2019s Kerberos or Active Directory server, ask your Kerberos administrator for a principal\nfor each Bookie in your cluster and for every operating system user that will access BookKeeper with Kerberos authentication\n(via clients and tools)."),(0,a.kt)("p",null,"If you have installed your own Kerberos, you will need to create these principals yourself using the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo /usr/sbin/kadmin.local -q 'addprinc -randkey bookkeeper/{hostname}@{REALM}'\nsudo /usr/sbin/kadmin.local -q \"ktadd -k /etc/security/keytabs/{keytabname}.keytab bookkeeper/{hostname}@{REALM}\"\n")),(0,a.kt)("h5",{id:"all-hosts-must-be-reachable-using-hostnames"},"All hosts must be reachable using hostnames"),(0,a.kt)("p",null,"It is a ",(0,a.kt)("em",{parentName:"p"},"Kerberos")," requirement that all your hosts can be resolved with their FQDNs."),(0,a.kt)("h3",{id:"configuring-bookies"},"Configuring Bookies"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add a suitably modified JAAS file similar to the one below to each Bookie\u2019s config directory, let\u2019s call it ",(0,a.kt)("inlineCode",{parentName:"p"},"bookie_jaas.conf"),"\nfor this example (note that each bookie should have its own keytab):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'```\nBookie {\n    com.sun.security.auth.module.Krb5LoginModule required\n    useKeyTab=true\n    storeKey=true\n    keyTab="/etc/security/keytabs/bookie.keytab"\n    principal="bookkeeper/bk1.hostname.com@EXAMPLE.COM";\n};\n// ZooKeeper client authentication\nClient {\n    com.sun.security.auth.module.Krb5LoginModule required\n    useKeyTab=true\n    storeKey=true\n    keyTab="/etc/security/keytabs/bookie.keytab"\n    principal="bookkeeper/bk1.hostname.com@EXAMPLE.COM";\n};\n// If you are running `autorecovery` along with bookies\nAuditor {\n    com.sun.security.auth.module.Krb5LoginModule required\n    useKeyTab=true\n    storeKey=true\n    keyTab="/etc/security/keytabs/bookie.keytab"\n    principal="bookkeeper/bk1.hostname.com@EXAMPLE.COM";\n};\n```\n\nThe `Bookie` section in the JAAS file tells the bookie which principal to use and the location of the keytab where this principal is stored.\nIt allows the bookie to login using the keytab specified in this section. See [notes](#notes) for more details on Zookeeper\u2019s SASL configuration.\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Pass the name of the JAAS file as a JVM parameter to each Bookie:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"-Djava.security.auth.login.config=/etc/bookkeeper/bookie_jaas.conf\n")),(0,a.kt)("p",{parentName:"li"},"You may also wish to specify the path to the ",(0,a.kt)("inlineCode",{parentName:"p"},"krb5.conf")," file\n(see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/KerberosReq.html"},"JDK\u2019s Kerberos Requirements")," for more details):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"-Djava.security.krb5.conf=/etc/bookkeeper/krb5.conf\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure the keytabs configured in the JAAS file are readable by the operating system user who is starting the Bookies.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enable SASL authentication plugin in the bookies by setting following parameters."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"bookieAuthProviderFactoryClass=org.apache.bookkeeper.sasl.SASLBookieAuthProviderFactory\n# if you run `autorecovery` along with bookies\nclientAuthProviderFactoryClass=org.apache.bookkeeper.sasl.SASLClientProviderFactory\n")))),(0,a.kt)("h3",{id:"configuring-clients"},"Configuring Clients"),(0,a.kt)("p",null,"To configure SASL authentication on the clients:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Clients will authenticate to the cluster with their own principal (usually with the same name as the user running the client),\nso obtain or create these principals as needed. Then create a ",(0,a.kt)("inlineCode",{parentName:"p"},"JAAS")," file for each principal. The ",(0,a.kt)("inlineCode",{parentName:"p"},"BookKeeper")," section describes\nhow the clients like writers and readers can connect to the Bookies. The following is an example configuration for a client using\na keytab (recommended for long-running processes):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'BookKeeper {\n    com.sun.security.auth.module.Krb5LoginModule required\n    useKeyTab=true\n    storeKey=true\n    keyTab="/etc/security/keytabs/bookkeeper.keytab"\n    principal="bookkeeper-client-1@EXAMPLE.COM";\n};\n')))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Pass the name of the JAAS file as a JVM parameter to the client JVM:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"-Djava.security.auth.login.config=/etc/bookkeeper/bookkeeper_jaas.conf\n")),(0,a.kt)("p",{parentName:"li"},"You may also wish to specify the path to the ",(0,a.kt)("inlineCode",{parentName:"p"},"krb5.conf")," file (see\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/KerberosReq.html"},"JDK\u2019s Kerberos Requirements")," for more details)."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"-Djava.security.krb5.conf=/etc/bookkeeper/krb5.conf\n")))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure the keytabs configured in the ",(0,a.kt)("inlineCode",{parentName:"p"},"bookkeeper_jaas.conf")," are readable by the operating system user who is starting bookkeeper client.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enable SASL authentication plugin in the client by setting following parameters."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"clientAuthProviderFactoryClass=org.apache.bookkeeper.sasl.SASLClientProviderFactory\n")))),(0,a.kt)("h2",{id:"enabling-logging-for-sasl"},"Enabling Logging for SASL"),(0,a.kt)("p",null,"To enable SASL debug output, you can set ",(0,a.kt)("inlineCode",{parentName:"p"},"sun.security.krb5.debug")," system property to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."))}k.isMDXComponent=!0}}]);