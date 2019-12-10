import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import { ObjectPage, TaskPage, NotFound } from "components/pages"
import { Layout } from "components/ui"

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" render={() => "logon"} />
      <Layout>
        <Switch>
          <Route path="/" render={() => <Redirect to="/tasks" />} exact />
          <Route path="/tasks" component={TaskPage} />
          <Route path="/objects" component={ObjectPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Switch>
  </BrowserRouter>
)
