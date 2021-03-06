import React from "react";
import { Switch, Route } from "react-router";
import { OuterWrapper,
         LeftWrapper } from "./Style";
import Filme from "./containers/filmes/Filme";
import Cliente from "./containers/clientes/Cliente";
import Menu from "./components/menu/Menu";
import Usuario from "./components/usuario/Usuario";
import Locacoes from "./containers/locacoes/Locacao";

const Routes = () => {
    return(
        <OuterWrapper>
            <LeftWrapper>
                <Menu/>
                <Usuario/>
            </LeftWrapper>
            <Switch>
                <Route path="/clients" component={Cliente} exact/>
                <Route path="/movies" component={Filme} exact/>
                <Route path="/rentals" component={Locacoes} exact/>
            </Switch>
        </OuterWrapper>
    );
};

export default Routes;