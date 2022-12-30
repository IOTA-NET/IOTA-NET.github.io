"use strict";(self.webpackChunkiotawallet_net_docs=self.webpackChunkiotawallet_net_docs||[]).push([[195],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,c(c({ref:n},u),{},{components:t})):r.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5415:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:2},c="Check Balance",i={unversionedId:"How To/Accounts and Addresses/Check Balance",id:"How To/Accounts and Addresses/Check Balance",title:"Check Balance",description:"Code Example",source:"@site/docs/How To/Accounts and Addresses/Check Balance.md",sourceDirName:"How To/Accounts and Addresses",slug:"/How To/Accounts and Addresses/Check Balance",permalink:"/iotawalletnet/docs/How To/Accounts and Addresses/Check Balance",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create a Wallet and an Account",permalink:"/iotawalletnet/docs/How To/Accounts and Addresses/Create and Setup Wallet"},next:{title:"Generate an Address",permalink:"/iotawalletnet/docs/How To/Accounts and Addresses/Generate an Address"}},l={},s=[{value:"Code Example",id:"code-example",level:2}],u={toc:s};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"check-balance"},"Check Balance"),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Initialize our wallet"),(0,o.kt)("li",{parentName:"ol"},"Get our ",(0,o.kt)("inlineCode",{parentName:"li"},"cookiemonster")," account"),(0,o.kt)("li",{parentName:"ol"},"Sync the account"),(0,o.kt)("li",{parentName:"ol"},"Retrieve the balance")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'    public static class CheckBalanceExample\n    {\n        public static async Task Run()\n        {\n            //Register all of the dependencies into a collection of services\n            IServiceCollection services = new ServiceCollection().AddIotaWalletServices();\n\n            //Install services to service provider which is used for dependency injection\n            IServiceProvider serviceProvider = services.BuildServiceProvider();\n\n            //Use serviceprovider to create a scope, which disposes of all services at end of scope\n            using (IServiceScope scope = serviceProvider.CreateScope())\n            {\n                //Request IWallet service from service provider\n                IWallet wallet = scope.ServiceProvider.GetRequiredService<IWallet>();\n\n                //Build wallet using a fluent-style configuration api\n                wallet = wallet\n                            .ConfigureWalletOptions()\n                                .SetCoinType(TypeOfCoin.Shimmer)\n                                .SetStoragePath("./walletdb")\n                                .Then()\n                            .ConfigureClientOptions()\n                                .AddNodeUrl("https://api.testnet.shimmer.network")\n                                .SetFaucetUrl("https://faucet.testnet.shimmer.network")\n                                .IsFallbackToLocalPow()\n                                .IsLocalPow()\n                                .Then()\n                            .ConfigureSecretManagerOptions()\n                                .SetPassword("password")\n                                .SetSnapshotPath("./mystronghold")\n                                .Then()\n                            .Initialize();\n\n                //We can retrieve all account info\n                GetAccountsResponse getAccountsResponse = await wallet.GetAccountsAsync();\n\n                //Or we can simply retrieve a particular account with its username\n                //Let\'s retrieve our cookiemonster account\n                (GetAccountResponse getAccountResponse, IAccount? account) = await wallet.GetAccountAsync("cookiemonster");\n                Console.WriteLine($"GetAccountAsync: {getAccountResponse}");\n\n                if (account == null)\n                {\n                    Console.WriteLine("There was a problem retreiving the account.");\n                    return;\n                }\n\n                //Sync the account with the tangle\n                await account.SyncAccountAsync();\n\n                //Retrieve balance\n                GetBalanceResponse balanceResponse = await account.GetBalanceAsync();\n                Console.WriteLine($"GetBalanceAsync: {balanceResponse}");\n            }\n        }\n    }\n')))}p.isMDXComponent=!0}}]);