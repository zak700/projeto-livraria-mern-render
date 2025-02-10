import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from 'react-router';

export default function sidebar() {
  return (
    <Sidebar className="pro-sidebar">
      <Menu className="pro-sidebar-menu">
        <MenuItem className="pro-sidebar-itens" component={<Link to="/home" />}> Home </MenuItem>
        <MenuItem className="pro-sidebar-itens" component={<Link to="/profile" />}> Profile </MenuItem>
        <MenuItem className="pro-sidebar-itens" component={<Link to="/messages" />}> Messages </MenuItem>
        <MenuItem className="pro-sidebar-itens" component={<Link to="/history" />}> History </MenuItem>
        <MenuItem className="pro-sidebar-itens" component={<Link to="/tasks" />}> Tasks </MenuItem>
        <MenuItem className="pro-sidebar-itens" component={<Link to="/communities" />}> Communities </MenuItem>
        <MenuItem className="pro-sidebar-itens" component={<Link to="/books" />}> Books </MenuItem>
        <SubMenu label="more" className="pro-sidebar-itens">
          <MenuItem className="pro-sidebar-itens" component={<Link to="/settings" />}> Settings </MenuItem>
          <MenuItem className="pro-sidebar-itens" component={<Link to="/support" />}> Support </MenuItem>
          <MenuItem className="pro-sidebar-itens" component={<Link to="/privacy" />}> Privacy </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}
