import { Card, CardContent, Typography, CardMedia } from "@mui/material";

export const Feature_Card = ({ image, head, content }) => {
    return (
        <Card
            sx={{
                textAlign: "center",
                backgroundColor: "transparent",
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 105, 0, 0.40)',
                p: 2,
                paddingTop:'20px',
                height:'100%',
                borderRadius: 3,
                boxShadow: "0 10px 20px rgba(255, 105, 0, 0.15)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 15px 25px rgba(255, 105, 0, 0.3)",
                },
            }}
        >
            {/* أيقونة / صورة */}
            {image && <div className="text-6xl mb-4">{image}</div>}

            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold", color: "#ed8f0e" }}
                >
                    {head}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{ color: "#99a1af", lineHeight: 1.6 }}
                >
                    {content}
                </Typography>
            </CardContent>
        </Card>
    );
};
