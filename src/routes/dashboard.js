// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import TimerView from '../components/Timer/TimerView'


// <Route exact path = {`${match.url}/notice`} component ={Board}/>
// <Switch>
//     <Route path = {`${match.url}/notice/writePosts`} component ={WriteBoard}/>
//     <Route exact path = {`${match.url}/notice/:postsNumber`} component ={BoardView}/>
// </Switch>
// <Route path = {`${match.url}/notice/editPosts/:editNumber`} component ={EditBoard}/>


const dashboardRoutes = [
  // {
  //   sideView: true, 
  //   //exact : true,
  //   path: "/WriteBoardCard",
  //   sidebarName: "WriteBoardCard",
  //   navbarName: "WriteBoardCard login",
  //   icon: WriteBoardCard,
  //   component: Login
  // },

  {
    sideView: true, 
    path: "/TimerView",
    sidebarName: "TimerView",
    navbarName: "Material Dashboard",
    icon: TimerView,
    component: TimerView
  },


  //{ redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
