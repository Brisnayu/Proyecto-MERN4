import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useState } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }}>
      {children}
      {onClose ? (
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export const PopupDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        style={{ backgroundColor: "var(--color-background)" }}
        data-testid="button-modal"
      >
        Click
      </Button>
      <BootstrapDialog onClose={handleClose} open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Información 🚀
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography>
            Toda la información presentada aquí es completamente ficticia y se ha creado
            exclusivamente con fines educativos. No se basa en datos reales, se ha
            utilizado como una herramienta didáctica para aprender y practicar. ¡A seguir
            programando y aprendiendo!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} data-testid="button-modal-close">
            Entendido!
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};
