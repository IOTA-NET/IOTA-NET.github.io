"use strict";(self.webpackChunktestdocs=self.webpackChunktestdocs||[]).push([[2377],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return t?r.createElement(m,c(c({ref:n},u),{},{components:t})):r.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},305:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:3},c="Burn NFTs",i={unversionedId:"How To/NFTs/Burn",id:"How To/NFTs/Burn",title:"Burn NFTs",description:"Code Example",source:"@site/docs/How To/NFTs/Burn.md",sourceDirName:"How To/NFTs",slug:"/How To/NFTs/Burn",permalink:"/iotawalletnet/docs/How To/NFTs/Burn",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Send NFTs",permalink:"/iotawalletnet/docs/How To/NFTs/Send"},next:{title:"Native Tokens",permalink:"/iotawalletnet/docs/category/native-tokens"}},s={},l=[{value:"Code Example",id:"code-example",level:2}],u={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"burn-nfts"},"Burn NFTs"),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Initialize your account"),(0,o.kt)("li",{parentName:"ol"},"Retrieve your ",(0,o.kt)("inlineCode",{parentName:"li"},"cookiemonster")," account"),(0,o.kt)("li",{parentName:"ol"},"Burn your nft using the nftid, you can get back the storage deposit as well")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'    public static class BurnNftExample\n    {\n        public static async Task Run()\n        {\n            //Register all of the dependencies into a collection of services\n            IServiceCollection services = new ServiceCollection().AddIotaWalletServices();\n\n            //Install services to service provider which is used for dependency injection\n            IServiceProvider serviceProvider = services.BuildServiceProvider();\n\n            //Use serviceprovider to create a scope, which disposes of all services at end of scope\n            using (IServiceScope scope = serviceProvider.CreateScope())\n            {\n                //Request IWallet service from service provider\n                IWallet wallet = scope.ServiceProvider.GetRequiredService<IWallet>();\n\n                //Build wallet using a fluent-style configuration api\n                wallet = wallet\n                            .ConfigureWalletOptions()\n                                .SetCoinType(TypeOfCoin.Shimmer)\n                                .SetStoragePath("./walletdb")\n                                .Then()\n                            .ConfigureClientOptions()\n                                .AddNodeUrl("https://api.testnet.shimmer.network")\n                                .SetFaucetUrl("https://faucet.testnet.shimmer.network")\n                                .IsFallbackToLocalPow()\n                                .IsLocalPow()\n                                .Then()\n                            .ConfigureSecretManagerOptions()\n                                .SetPassword("password")\n                                .SetSnapshotPath("./mystronghold")\n                                .Then()\n                            .Initialize();\n\n\n                //Let\'s retrieve our cookiemonster account\n                (GetAccountResponse accountResponse, IAccount? account) = await wallet.GetAccountAsync("cookiemonster");\n                Console.WriteLine($"GetAccountAsync: {accountResponse}");\n\n                if (account == null)\n                {\n                    Console.WriteLine("There was a problem retreiving the account.");\n                    return;\n                }\n\n                //Sync account\n                await account.SyncAccountAsync();\n\n                //TODO: Replace with the address of your choice!\n                string receiverAddress = "rms1qz8wf6jrchvsfmcnsfhlf6s53x3u85y0j4hvwth9a5ff3xhrxtmvvyc9ae7";\n\n                //TODO: Replace with an nft output id from your accounts.\n                string outputId = "0x9c5fc8b575e29377e0401d2cd6138c0f4859fbb95b5acf0ea81b3354de6eb2e70100";\n\n                var nftId = outputId.ComputeBlake2bHash();\n\n\n                //Burn our nfts\n                BurnNftResponse burnNftResponse = await account.BurnNftAsync(nftId);\n\n                //For testnet\n                Console.WriteLine($"Check your block on https://explorer.shimmer.network/testnet/block/{burnNftResponse.Payload!.BlockId}");\n\n            }\n        }\n    }\n    \n')))}p.isMDXComponent=!0}}]);