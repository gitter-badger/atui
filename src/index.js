import Icon from './components/Icon/'
import Form from './components/Form/'
import Layout from './components/Layout/'
import Button from './components/Button/'
import Input from './components/Input/'
import Searchbox from './components/Searchbox/'
import Uploader from './components/Uploader/'
import Slider from './components/Slider/'
import Switch from './components/Switch/'
import Dropdown from './components/Dropdown/'
import Select from './components/Select/'
import Calendar from './components/Calendar/'
import TimePicker from './components/TimePicker/'
import DatePicker from './components/DatePicker/'
// import Progressbar from './components/progressbar.vue'
import Typeahead from './components/Typeahead.vue'


// 展示类
import Cascader from './components/Cascader/'
import Message from './components/Message/'
import Modal from './components/Modal/'
import Table from './components/Table/'
import Badge from './components/Badge/'
import Carousel from './components/Carousel/'
import Affix from './components/Affix.vue'
// import Container from './components/Container.vue'
import Spin from './components/Spin/'
import Textarea from './components/Textarea/'
import Tag from './components/Tag/'
import Tooltip from './components/Tooltip/'
import Accordion from './components/Accordion/'


// 导航类
// import ffix from './components/affix.vue'
// import side from './components/aside.vue'
import Popover from './components/Popover/'
import Tabs from './components/Tabs/'
import Steps from './components/Steps/'
import Menu from './components/Menu/'
import Breadcrumb from './components/Breadcrumb/'
import Pagination from './components/Pagination/'


const VueComponent = {
  Layout,
  Icon,
  Form,
  Searchbox,
  Uploader,
  Slider,
  Switch,
  Dropdown,
  Select,
  Calendar,
  TimePicker,
  DatePicker,
  Typeahead,
  Message,
  Cascader,
  Modal,
  Table,
  Badge,
  Carousel,
  Affix,
  Spin,
  Textarea,
  Input,
  Button,
  Tag,
  Tooltip,
  Accordion,
  Popover,
  Tabs,
  Steps,
  Menu,
  Breadcrumb,
  Pagination
}

module.exports = VueComponent


function getIEVersion() {
    var agent = navigator.userAgent
    var reg = /MSIE\s?(\d+)(?:\.(\d+))?/i
    var matches = agent.match(reg)
    if (matches != null) {
        return { major: matches[1], minor: matches[2] }
    }
    return { major: "-1", minor: "-1" }
}

var ie_version =  getIEVersion()
// ie10以及以下，对某些样式支持有问题，需要降级
document.addEventListener("DOMContentLoaded", function(event) {
  if(ie_version.major === '9' || ie_version.major === '10') {
    Vue.util.addClass(document.body,'let-ie11')
    Vue.util.addClass(document.body,'ie' + ie_version.major)
  }
})
