"use strict";(self.webpackChunkiotawallet_net_docs=self.webpackChunkiotawallet_net_docs||[]).push([[300],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),l=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},v=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(t),v=r,m=p["".concat(i,".").concat(v)]||p[v]||d[v]||s;return t?o.createElement(m,c(c({ref:n},u),{},{components:t})):o.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,c=new Array(s);c[0]=v;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a[p]="string"==typeof e?e:r,c[1]=a;for(var l=2;l<s;l++)c[l]=t[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}v.displayName="MDXCreateElement"},401:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(7462),r=(t(7294),t(3905));const s={},c="Subscribe to Events",a={unversionedId:"How To/Events/Subscribe",id:"How To/Events/Subscribe",title:"Subscribe to Events",description:"Code Example",source:"@site/docs/How To/Events/Subscribe.md",sourceDirName:"How To/Events",slug:"/How To/Events/Subscribe",permalink:"/iotawalletnet/docs/How To/Events/Subscribe",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/How To/Events/Subscribe.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Send Native Tokens",permalink:"/iotawalletnet/docs/How To/Native Tokens/Send"}},i={},l=[{value:"Code Example",id:"code-example",level:2}],u={toc:l};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"subscribe-to-events"},"Subscribe to Events"),(0,r.kt)("h2",{id:"code-example"},"Code Example"),(0,r.kt)("p",null,"The following example will:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Load our wallet"),(0,r.kt)("li",{parentName:"ol"},"Subscribe to events"),(0,r.kt)("li",{parentName:"ol"},"Sync and Send some amount to trigger events"),(0,r.kt)("li",{parentName:"ol"},"Events that are printed to the console")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'    public static class EventsExample\n    {\n        public static async Task Run()\n        {\n            //Register all of the dependencies into a collection of services\n            IServiceCollection services = new ServiceCollection().AddIotaWalletServices();\n\n            //Install services to service provider which is used for dependency injection\n            IServiceProvider serviceProvider = services.BuildServiceProvider();\n\n            //Use serviceprovider to create a scope, which disposes of all services at end of scope\n            using (IServiceScope scope = serviceProvider.CreateScope())\n            {\n                //Request IWallet service from service provider\n                IWallet wallet = scope.ServiceProvider.GetRequiredService<IWallet>();\n\n                //Build wallet using a fluent-style configuration api\n                wallet = wallet\n                            .ConfigureWalletOptions()\n                                .SetCoinType(TypeOfCoin.Shimmer)\n                                .SetStoragePath("./walletdb")\n                                .Then()\n                            .ConfigureClientOptions()\n                                .AddNodeUrl("https://api.testnet.shimmer.network")\n                                .SetFaucetUrl("https://faucet.testnet.shimmer.network")\n                                .IsFallbackToLocalPow()\n                                .IsLocalPow()\n                                .Then()\n                            .ConfigureSecretManagerOptions()\n                                .SetPassword("password")\n                                .SetSnapshotPath("./mystronghold")\n                                .Then()\n                            .Initialize();\n\n                //Lets subscribe to all events\n\n                wallet.WalletEventReceived += Wallet_WalletEventReceived;\n                wallet.SubscribeToEvents(WalletEventTypes.AllEvents);\n\n                //We can also choose the particular events we want to subscribe to\n                //wallet.SubscribeToEvents(WalletEventTypes.TransactionProgress | WalletEventTypes.TransactionInclusion);\n\n                //TODO unsubscribe from events\n\n                //Let\'s retrieve our cookiemonster account\n                (GetAccountResponse accountResponse, IAccount? account) = await wallet.GetAccountAsync("cookiemonster");\n                Console.WriteLine($"GetAccountAsync: {accountResponse}");\n\n                if (account == null)\n                {\n                    Console.WriteLine("There was a problem retreiving the account.");\n                    return;\n                }\n\n                SyncAccountResponse syncAccountResponse = await account.SyncAccountAsync();\n                Console.WriteLine($"SyncAccountAsync: {syncAccountResponse}");\n                \n                await account.ConsolidateOutputsAsync(true);\n\n                GetBalanceResponse getBalanceResponse = await account.GetBalanceAsync();\n                Console.WriteLine($"GetBalanceAsync: {getBalanceResponse}");\n\n                //Let\'s send 1 shimmer, which is 1,000,000 Glow\n                string receiverAddress = "rms1qz9f7vecqscfynnxacyzefwvpza0wz3r0lnnwrc8r7qhx65s5x7rx2fln5q";\n\n                SendAmountResponse sendAmountResponse = await account.SendAmountUsingBuilder()\n                                                                        .AddAddressAndAmount(receiverAddress, 1000000)\n                                                                        .SendAmountAsync();\n\n                Console.WriteLine($"SendAmountAsync: {sendAmountResponse}");\n\n\n                Console.ReadLine();\n\n            }\n\n        }\n\n        private static void Wallet_WalletEventReceived(object? sender, IWalletEvent? walletEvent)\n        {\n            Console.WriteLine($"Event Received: {JsonConvert.SerializeObject(walletEvent)}");\n        }\n    }\n')))}p.isMDXComponent=!0}}]);