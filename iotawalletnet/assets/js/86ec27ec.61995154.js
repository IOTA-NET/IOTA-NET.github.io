"use strict";(self.webpackChunkiotawallet_net_docs=self.webpackChunkiotawallet_net_docs||[]).push([[283],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>w});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),l=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,w=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(w,c(c({ref:n},p),{},{components:t})):o.createElement(w,c({ref:n},p))}));function w(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[d]="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6395:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(7462),r=(t(7294),t(3905));const a={sidebar_position:1},c="Create a Wallet and an Account",s={unversionedId:"How To/Accounts and Addresses/Create and Setup Wallet",id:"How To/Accounts and Addresses/Create and Setup Wallet",title:"Create a Wallet and an Account",description:"Code Example",source:"@site/docs/How To/Accounts and Addresses/Create and Setup Wallet.md",sourceDirName:"How To/Accounts and Addresses",slug:"/How To/Accounts and Addresses/Create and Setup Wallet",permalink:"/iotawalletnet/docs/How To/Accounts and Addresses/Create and Setup Wallet",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Accounts and Addresses",permalink:"/iotawalletnet/docs/category/accounts-and-addresses"},next:{title:"Check Balance",permalink:"/iotawalletnet/docs/How To/Accounts and Addresses/Check Balance"}},i={},l=[{value:"Code Example",id:"code-example",level:2}],p={toc:l};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-wallet-and-an-account"},"Create a Wallet and an Account"),(0,r.kt)("h2",{id:"code-example"},"Code Example"),(0,r.kt)("p",null,"The following example will:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create an wallet"),(0,r.kt)("li",{parentName:"ol"},"Create a Stronghold mnemonic"),(0,r.kt)("li",{parentName:"ol"},"Use the wallet to store the Stronghold mnemonic into a stronghold file"),(0,r.kt)("li",{parentName:"ol"},"Create 2 accounts with usernames ",(0,r.kt)("inlineCode",{parentName:"li"},"cookiemonster")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"elmo"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'    public static class CreateAWalletAndAccountExample\n    {\n        \n        public async static Task Run()\n        {\n            //Register all of the dependencies into a collection of services\n            IServiceCollection services = new ServiceCollection().AddIotaWalletServices();\n\n            //Install services to service provider which is used for dependency injection\n            IServiceProvider serviceProvider = services.BuildServiceProvider();\n\n            //Use serviceprovider to create a scope, which safely disposes of all services at end of scope\n            using (IServiceScope scope = serviceProvider.CreateScope())\n            {\n                //Request IWallet service from service provider\n                IWallet wallet = scope.ServiceProvider.GetRequiredService<IWallet>();\n\n                //Build wallet using a fluent-style configuration api\n                wallet = wallet\n                            .ConfigureWalletOptions()\n                                .SetCoinType(TypeOfCoin.Shimmer)\n                                .SetStoragePath("./walletdb")\n                                .Then()\n                            .ConfigureClientOptions()\n                                .AddNodeUrl("https://api.testnet.shimmer.network")\n                                .SetFaucetUrl("https://faucet.testnet.shimmer.network")\n                                .IsFallbackToLocalPow()\n                                .IsLocalPow()\n                                .Then()\n                            .ConfigureSecretManagerOptions()\n                                .SetPassword("password")\n                                .SetSnapshotPath("./mystronghold")\n                                .Then()\n                            .Initialize();\n\n\n                //Let\'s generate a new Mnemonic\n                GetNewMnemonicResponse getNewMnemonicResponse = await wallet.GetNewMnemonicAsync();\n                Console.WriteLine($"GetNewMnemonicAsync: {getNewMnemonicResponse}");\n                string newMnemonic = getNewMnemonicResponse.Payload!;\n\n                //Store into stronghold\n                StoreMnemonicResponse storeMnemonicResponse = await wallet.StoreMnemonicAsync(newMnemonic);\n                Console.WriteLine($"StoreMnemonicAsync: {storeMnemonicResponse}");\n\n                //Let\'s create 2 accounts, with usernames cookiemonster and elmo\n                CreateAccountResponse createAccountResponse;\n                (createAccountResponse, IAccount? cookieMonsterAccount) = await wallet.CreateAccountAsync("cookiemonster");\n                Console.WriteLine($"CreateAccountAsync: {createAccountResponse}");\n\n                (createAccountResponse, IAccount? elmoAccount) = await wallet.CreateAccountAsync("elmo");\n                Console.WriteLine($"CreateAccountAsync: {createAccountResponse}");\n\n            }\n        }\n\n    }\n')))}d.isMDXComponent=!0}}]);