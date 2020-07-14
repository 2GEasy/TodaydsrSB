import React,{Component} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import logo from '../img/logo.png';
import { Link as RouterLink } from 'react-router-dom';


const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(1),
  },
  demo2: {
    backgroundColor: '#ffffff',
  },
  logo:{
    color: '#ed7d31',
    fontStyle: 'bold',
    fontSize: '20px',
  },
  lg:{
    marginLeft : "30px",
    paddingTop: "10px"
  },
  tabs: {
    borderBottom: '#000000'
    
  },
  tab: {
    '&:focus': {
      opacity: 1,
    }
  },
});


class CustomizedTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    }
  }
  handleChange = (e, newValue) => {
    this.setState({value: newValue});
  };
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
      <div className={classes.demo2}>
        
        <Tabs TabIndicatorProps={{style: {backgroundColor: "#F57C00"}}} value={this.state.value} onChange={this.handleChange} aria-label="styled tabs example">
          <RouterLink to="/"><img className={classes.lg} src={logo} width="60px" height="60px"></img></RouterLink>
          <Tab label="공지사항" disableRipple component={RouterLink} to="/notice"/>
          <Tab label="소개" disableRipple component={RouterLink} to="/produce" />
          <Tab label="이달의 판매자" disableRipple component={RouterLink} to="/bsaler" />
          <Tab label="문의" disableRipple component={RouterLink} to="/inquire" />
        </Tabs>
        <Typography className={classes.padding} />
        
      </div>
    </div>
    );
  }
}

export default withStyles(useStyles)(CustomizedTabs);