import { Outlet } from "react-router-dom"

const { Header } = require("components/Header/Header")

export const Layout = () => { return (<> <Header/> <Outlet/> </>) }

