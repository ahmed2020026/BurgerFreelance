import { Card, CardActionArea, CardContent, Typography, CardMedia } from "@mui/material";

export const Menu_Card = ({ image, head, content, onClick = null }) => {
    return (
        <Card
            onClick={onClick}
            sx={{
                backgroundColor: "transparent",
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 105, 0, 0.40)',
                borderRadius: 3,
                boxShadow: "0 10px 20px rgba(255, 105, 0, 0.15)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 15px 25px rgba(255, 105, 0, 0.3)",
                },
            }}
        >
            <CardActionArea>
                {/* أيقونة / صورة */}
                <CardMedia
                    sx={{ height: 200 }}
                    image={image}
                    title={head}
                />

                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontWeight: "bold", fontSize: '18px', color: "#ed8f0e", textAlign: 'left' }}
                    >
                        {head}
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{ color: "#fff", lineHeight: 1.6, textAlign: 'left' }}
                    >
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
