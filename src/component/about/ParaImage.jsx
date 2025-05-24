import image from "../../assets/about/aboutHome.png"
import React from "react"
const ParaImage = () => {
    return (
        <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            padding: "50px",
            gap: "50px",

        }}>
            <div style={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "20px",
            }}>
                <h2 style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    color: "var(--main-color)",
                    fontFamily: "var(--font-ubuntu)",
                }}>
                    The Bean Counter’s Story
                </h2>

                <p style={{
                    fontSize: "20px",
                    fontWeight: "normal",
                    color: "var(--main-color)",
                    fontFamily: "var(--font-ubuntu)",
                    textAlign: "justify",
                }}>
                    Since 2008, Bean Counter has been dedicated to helping small businesses and HR professionals simplify their financial tasks, including tax filing and bookkeeping.
                </p>

                <p style={{
                    fontSize: "20px",
                    fontWeight: "normal",
                    color: "var(--main-color)",
                    fontFamily: "var(--font-ubuntu)",
                    textAlign: "justify",
                }}>
                    Originally a local service in Palm Springs, we’ve grown to support clients Statewide with a straightforward approach that saves both time and money. Our top priority is you—delivering professional, accurate services to keep your books in order, so you can focus on running and expanding your business.
                </p>
            </div>

            <div style={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <img src={image} alt=""
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </div>
        </div>
    )
}

export default ParaImage