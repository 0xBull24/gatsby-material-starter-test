import React, { Component } from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import ToolbarActions from '../ToolbarActions/ToolbarActions.jsx';
import Footer from '../Footer/Footer.jsx';
import GetNavList from './NavList.jsx';
import './Navigation.scss';

class Navigation extends Component {
  render() {
    console.log(this.props);
    const { children, LocalTitle } = this.props;
    const SiteConfig = this.props.data.site.siteMetadata;
    return (
      <NavigationDrawer
        drawerTitle={SiteConfig.siteTitle}
        toolbarTitle={LocalTitle}
        contentClassName="main-content"
        navItems={GetNavList(SiteConfig)}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        toolbarActions={<ToolbarActions SiteConfig={SiteConfig} />}
      >
        <div className="main-container">
          {/* {children}*/}
        </div>
        <Footer SiteConfig={SiteConfig} />
      </NavigationDrawer>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteTitle
        linkPrefix
        googleAnalyticsID
        disqusShortname
        postDefaultCategoryID
        userName
        userLocation
        userAvatar
        userDescription
        copyright
      }
    }
  }
`;

export default Navigation;
