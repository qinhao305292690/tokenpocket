import Vue from 'vue';
import {
  Button,
  Swipe,
  Step,
  Checkbox,
  Tabbar,
  TabbarItem,
  Loading,
  Search,
  Toast,
  Steps,
  Field,
  Col,
  Row,
  Cell,
  CellGroup,
  Icon,
  Dialog,
  NavBar,
  Switch,
  SwipeItem
} from 'vant';

Vue.use(Button)
  .use(Swipe)
  .use(Col)
  .use(Row)
  .use(Search)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Cell)
  .use(Icon)
  .use(CellGroup)
  .use(Step)
  .use(Checkbox)
  .use(Loading)
  .use(Toast)
  .use(Steps)
  .use(NavBar)
  .use(Field)
  .use(Dialog)
  .use(SwipeItem)
  .use(Switch)

Vue.prototype.$Toast = Toast;
// Vue.prototype.$confirm = Modal.confirm;
