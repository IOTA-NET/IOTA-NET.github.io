"use strict";(self.webpackChunktestdocs=self.webpackChunktestdocs||[]).push([[4669],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||s;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<s;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1702:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const s={sidebar_position:3},a="Generate an Address",c={unversionedId:"How To/Accounts and Addresses/Generate an Address",id:"How To/Accounts and Addresses/Generate an Address",title:"Generate an Address",description:"Code Example",source:"@site/docs/How To/Accounts and Addresses/Generate an Address.md",sourceDirName:"How To/Accounts and Addresses",slug:"/How To/Accounts and Addresses/Generate an Address",permalink:"/iotawalletnet/docs/How To/Accounts and Addresses/Generate an Address",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Check Balance",permalink:"/iotawalletnet/docs/How To/Accounts and Addresses/Check Balance"},next:{title:"Request Shimmer from Faucet",permalink:"/iotawalletnet/docs/How To/Outputs and Transactions/Request Tokens From Faucet"}},i={},l=[{value:"Code Example",id:"code-example",level:2}],d={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generate-an-address"},"Generate an Address"),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Load our wallet"),(0,o.kt)("li",{parentName:"ol"},"Retrieve our ",(0,o.kt)("inlineCode",{parentName:"li"},"cookiemonster")," account"),(0,o.kt)("li",{parentName:"ol"},"Generate an address")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'    public static class GenerateAnAddressExample\n    {\n        public static async Task Run()\n        {\n            //Register all of the dependencies into a collection of services\n            IServiceCollection services = new ServiceCollection().AddIotaWalletServices();\n\n            //Install services to service provider which is used for dependency injection\n            IServiceProvider serviceProvider = services.BuildServiceProvider();\n\n            //Use serviceprovider to create a scope, which disposes of all services at end of scope\n            using (IServiceScope scope = serviceProvider.CreateScope())\n            {\n                //Request IWallet service from service provider\n                IWallet wallet = scope.ServiceProvider.GetRequiredService<IWallet>();\n\n                //Build wallet using a fluent-style configuration api\n                wallet = wallet\n                            .ConfigureWalletOptions()\n                                .SetCoinType(TypeOfCoin.Shimmer)\n                                .SetStoragePath("./walletdb")\n                                .Then()\n                            .ConfigureClientOptions()\n                                .AddNodeUrl("https://api.testnet.shimmer.network")\n                                .SetFaucetUrl("https://faucet.testnet.shimmer.network")\n                                .IsFallbackToLocalPow()\n                                .IsLocalPow()\n                                .Then()\n                            .ConfigureSecretManagerOptions()\n                                .SetPassword("password")\n                                .SetSnapshotPath("./mystronghold")\n                                .Then()\n                            .Initialize();\n\n                //Let\'s retrieve our cookiemonster account\n                (GetAccountResponse getAccountResponse, IAccount? account) = await wallet.GetAccountAsync("cookiemonster");\n                Console.WriteLine($"GetAccountAsync: {getAccountResponse}");\n\n                if (account == null)\n                {\n                    Console.WriteLine("There was a problem retreiving the account.");\n                    return;\n                }\n\n                //Lets generate 1 new address!\n                GenerateAddressesResponse? generateAddressesCommandResponse = await account.GenerateAddressesAsync(numberOfAddresses: 1, NetworkType.Testnet);\n                string? generatedAddress = generateAddressesCommandResponse?.Payload?.FirstOrDefault()?.Address;\n\n                if (generatedAddress.IsNotNullAndEmpty())\n                    Console.WriteLine($"GenerateAddressesAsync: {generatedAddress}");\n            }\n        }\n    }\n')))}p.isMDXComponent=!0}}]);