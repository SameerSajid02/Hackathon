import { Button } from "@mui/material";

type propsType = {
    label: string;
    onClick?: any;
  };
  
  export default function BAButton(props: propsType) {
    const { label, onClick } = props;
    return (
      <Button variant="contained" 
      onClick={onClick}
      className="px-3 p-2">
        {label}
        </Button>
    );
  }