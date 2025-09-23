import { Menu as SemanticMenu, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Menu = ({ user, handleLogout }) => {
  return (
        <SemanticMenu
            pointing
            secondary
            inverted
            fixed='top'
            style={{
            backgroundColor: "rgba(26, 24, 23, 0.94)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            padding: "1em 0"
        }}
        >
      {/* Left-aligned menu items */}
      <SemanticMenu.Item as={Link} to="/">
        Home
      </SemanticMenu.Item>
      <SemanticMenu.Item as={Link} to="/articles">
        Articles
      </SemanticMenu.Item>

      {/* Right-aligned user info */}
      <SemanticMenu.Menu position="right">
  {user ? (
    <>
      <SemanticMenu.Item as={Link} to="/adminpage">
        adminpage
      </SemanticMenu.Item>

      <SemanticMenu.Item style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <em>{user.name} logged in</em>
        <Button size="small" onClick={handleLogout}>
          logout
        </Button>
      </SemanticMenu.Item>
    </>
  ) : (
    <SemanticMenu.Item as={Link} to="/login">
      <Icon name="sign-in" />
    </SemanticMenu.Item>
  )}
</SemanticMenu.Menu>
    </SemanticMenu>
  );
};

export default Menu;