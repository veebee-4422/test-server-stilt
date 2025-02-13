const express = require("express");
const morgan = require("morgan");

const {
    deepLinkData,
    homeActivitsData,
    menuData,
    shopsData,
    trendingPageData,
    searchPageData,
} = require("./constants.js");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res, next) => {
    return res.send("OK")
})

app.get("/deep_link_data", (req, res, next) => {
    const status = Number(req.query.status_code);

    if (status) {
        return res.status(status).send("OH NO AN ERROR")
    }

    return res.send(deepLinkData);
})

app.get("/deep-link-data", (req, res, next) => {
    const status = Number(req.query.status_code);

    if (status) {
        return res.status(status).send("OH NO AN ERROR")
    }

    return res.send(deepLinkData);
})

app.get("/home-activity-data", (req, res, next) => {
    const status = Number(req.query.status_code);

    if (status) {
        return res.status(status).send("OH NO AN ERROR")
    }

    res.send(homeActivitsData);
});

app.get("/getMenuData", (req, res, next) => {
    const status = Number(req.query.status_code);

    if (status) {
        return res.status(status).send("OH NO AN ERROR")
    }

    return res.send(menuData);
});

app.get("/get-menu-data", (req, res, next) => {
    const status = Number(req.query.status_code);

    if (status) {
        return res.status(status).send("OH NO AN ERROR")
    }

    return res.send(menuData);

});

app.get("/shop-page-data", (req, res, next) => {
    const status = Number(req.query.status_code);

    if (status) {
        return res.status(status).send("OH NO AN ERROR")
    }

    return res.send(shopsData);
});

app.get("/trending-page-data", (req, res, next) => {
    const status = Number(req.query.status_code);

    if (status) {
        return res.status(status).send("OH NO AN ERROR")
    }

    return res.send(trendingPageData);
});

app.get("/search-page-data", (req, res, next) => {
    const status = Number(req.query.status_code);

    if (status) {
        return res.status(status).send("OH NO AN ERROR")
    }

    return res.send(searchPageData);
});


const server = app.listen(3000, async () => {
    console.log(`Server listening at port 3000 Hey Hi`);
});