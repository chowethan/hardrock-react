import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Dropdown, Grid, Icon } from 'semantic-ui-react';

class Topmenu extends React.Component {
  render() {
    return (
        <Menu className='topmenu' borderless>
          <Container>
            <div className="logo" />
            <Menu.Item position={'right'} href='#'>Home</Menu.Item>
            <Menu.Item href='#'>Hotels</Menu.Item>
            <Menu.Item href='#'>Casinos</Menu.Item>
            <Menu.Item href='#'>Live</Menu.Item>
            <Menu.Item href='#'>Shop</Menu.Item>
            <Menu.Item href='#'>Blog</Menu.Item>
            <Menu.Item href='#'>Rewards</Menu.Item>
          </Container>
        </Menu>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
        <Menu className='footer' borderless style={{'padding': '15px'}}>
          <Grid container={true} className='menugrid'>
            <Grid.Row centered={true} style={{textTransform: "uppercase", fontSize: "22px"}}>
              Hard Rock Cafe Honolulu
            </Grid.Row>
            <Grid.Row centered={true}>
              <Icon name="phone" /><a href="tel:+1-808-955-7383">+1-808-955-7383</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Icon name="envelope" /><a href="mailto:honolulu_sales@hardrock.com">Email Us</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Icon name="home" /><a href="https://goo.gl/maps/4pK8Z">280 Beachwalk, Honolulu, Hawaii 96815</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Icon name="home" /><a href="https://goo.gl/maps/4pK8Z">280 Beachwalk, Honolulu, Hawaii 96815</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://twitter.com/hrchonolulu"><Icon name="twitter"></Icon></a>
              <a href="https://twitter.com/hrchonolulu"><Icon name="twitter"></Icon></a>
              <a href="https://www.facebook.com/hardrockcafehonolulu"><Icon name="facebook f"></Icon></a>
              <a href="https://instagram.com/hrchonolulu/"><Icon name="instagram"></Icon></a>
              <a href="https://www.pinterest.com/HRCHonolulu/"><Icon name="pinterest"></Icon></a>
              <a href="http://www.tripadvisor.com/Restaurant_Review-g60982-d433958-Reviews-Hard_Rock_Cafe-Honolulu_Oahu_Hawaii.html"><i class="tripadvisor icon"></i></a>
            </Grid.Row>
          </Grid>
        </Menu>
    );
  }
}

class HardRock extends React.Component {

  render() {
    return (
        <div>
          <Topmenu />
          <div className="background" />
          <Footer />
        </div>
    );
  }
}

ReactDOM.render(<HardRock/>, document.getElementById('root'));
