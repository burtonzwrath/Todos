import { Avatar, ListItemAvatar } from "@mui/material";

export default function AvatarIcon({ todo }) {
  switch (todo.complited) {
      case true:
      return (
        <ListItemAvatar >
          <Avatar
            alt={`false`}
            src={`https://image.shutterstock.com/image-illustration/done-validate-icon-isolated-on-260nw-1142105480.jpg`}
          />
        </ListItemAvatar>
      );
      default: return (
          <ListItemAvatar>
              <Avatar
                  alt={`true`}
                  src={`https://www.freeiconspng.com/thumbs/x-png/red-x-png-4.png`}

              />
          </ListItemAvatar>
      );
  }
}
