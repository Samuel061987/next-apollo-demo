(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 353:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Users_container__seDVK",
	"main": "Users_main__9ui9x",
	"footer": "Users_footer__F6UFA",
	"title": "Users_title__WwuV0",
	"description": "Users_description__K4_Y6",
	"code": "Users_code__OWgnG",
	"grid": "Users_grid__wIG4E",
	"card": "Users_card__sU8Wz",
	"logo": "Users_logo__ot2QE",
	"load_more_button": "Users_load_more_button__PUgYQ"
};


/***/ }),

/***/ 465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Users),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@apollo/client"
const client_namespaceObject = require("@apollo/client");
;// CONCATENATED MODULE: ./lib/with-apollo.js

const client = new client_namespaceObject.ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new client_namespaceObject.InMemoryCache()
});
/* harmony default export */ const with_apollo = (client);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./styles/Users.module.css
var Users_module = __webpack_require__(353);
var Users_module_default = /*#__PURE__*/__webpack_require__.n(Users_module);
;// CONCATENATED MODULE: ./components/UserList.js



const UserList = ({ user  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Users_module_default()).grid,
        children: user.map((data, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Users_module_default()).card,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: data.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "Phone: ",
                            data.phone
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "Address: ",
                            data.address
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "Email: ",
                            data.email
                        ]
                    })
                ]
            }, index))
    });
};
/* harmony default export */ const components_UserList = (UserList);

;// CONCATENATED MODULE: ./components/UserDetails.js





const UserDetails = ({ userslist  })=>{
    const [usersData, setUserData] = (0,external_react_.useState)(userslist);
    const [loadMore, setLoadMore] = (0,external_react_.useState)(false);
    const [offset, setOffset] = (0,external_react_.useState)(0);
    const limit = 20;
    const query = client_namespaceObject.gql`
    query Users ($limit: Int!, $offset: Int!) {
        users(limit: $limit, offset: $offset) {
          name
          address
          email
          phone
        }
      }
  `;
    const { data , fetchMore  } = (0,client_namespaceObject.useQuery)(query, {
        variables: {
            limit: limit,
            offset: offset
        }
    });
    if (data && loadMore) {
        setLoadMore(false);
        setUserData(usersData.concat(data.users));
    }
    const handleLoadMore = ()=>{
        console.log("handleLoadMore");
        setLoadMore(true);
        setOffset(offset + limit);
        try {
            fetchMore({
                variables: {
                    limit: limit,
                    offset: offset
                }
            });
        } catch (err) {
            console.log(`Error! ${err.message}`);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Users_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
            className: (Users_module_default()).main,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_UserList, {
                    user: usersData
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: (Users_module_default()).load_more_button,
                    onClick: handleLoadMore,
                    children: "Load more"
                })
            ]
        })
    });
};
/* harmony default export */ const components_UserDetails = (UserDetails);

;// CONCATENATED MODULE: ./pages/index.js





function Users({ users  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(client_namespaceObject.ApolloProvider, {
        client: with_apollo,
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_UserDetails, {
            userslist: users
        })
    });
}
async function getStaticProps() {
    const { data  } = await with_apollo.query({
        query: client_namespaceObject.gql`
    query Users {
      users(limit: 20, offset: 0) {
        name
        address
        email
        phone
      }
    }
    `
    });
    return {
        props: {
            users: data.users
        }
    };
}


/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(465));
module.exports = __webpack_exports__;

})();