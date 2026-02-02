import { Button } from "@mui/material"

export const BtnClick = ({
    Text,
    variant = "contained",
    size = "medium",
    onClick
}) => {
    return (
        <Button
            onClick={onClick}
            variant={variant}
            size={size}
            sx={{
                ...(variant === "outlined"
                    ? {
                        borderColor: "#ed8f0e",
                        color: "#ed8f0e",
                        "&:hover": {
                            borderColor: "#e65f00",
                            backgroundColor: "rgba(255,105,0,0.08)",
                        },
                    }
                    : {
                        backgroundColor: "#ed8f0e",
                        color: "#fff",
                        "&:hover": {
                            backgroundColor: "#e65f00",
                        },
                    }),
                borderRadius: "10px",
            }}

        >
            {Text}
        </Button>
    )
}
