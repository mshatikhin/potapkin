import {Route, IndexRedirect} from "react-router";
import Layout from "../components/Layout/Layout";
import Portfolio from "../pages/Portfolio/Portfolio";
import Photos from "../pages/Photos/Photos";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import Post from "../pages/Post";
import Stories from "../pages/Stories";
import StoryPhotos from "../pages/StoryPhotos";
import NotFound from "../components/NotFound/NotFound";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";

let store;

export default function routes(storeRef) {
    store = storeRef;

    return (
        <Route path="/" component={ Layout }>
            <IndexRedirect to="home"/>
            <Route path="home" component={ Home }/>
            <Route path="portfolio" component={ Portfolio }/>
            <Route path="portfolio/:id" component={ Photos }/>
            <Route path="stories" component={ Stories }/>
            <Route path="stories/:id" component={ StoryPhotos }/>
            <Route path="blog" component={ Blog }/>
            <Route path="blog/:id" component={ Post }/>
            <Route path="services" component={ Services }/>
            <Route path="about" component={ About }/>
            <Route path="*" component={ NotFound }/>
        </Route>
    )
}
