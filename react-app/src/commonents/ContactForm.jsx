import Button from "@mui/material/Button";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TextField from "@mui/material/TextField";
import "./ContactUs.css";

export default function ContactForm() {
  return (
    <div className="Main">
      <div className="Form-container">
        <div className="container-btn">
          <Button
            style={{ width: "200px" }}
            variant="contained"
            startIcon={<TextSnippetIcon />}
          >
            Via Support Chat
          </Button>
          <Button
            style={{ width: "200px" }}
            variant="contained"
            startIcon={<LocalPhoneIcon />}
          >
            Via Call
          </Button>
        </div>

        <Button
          style={{
            width: "428px",
            marginTop: "19px",
            color: "black",
            border: "2px solid black",
          }}
          variant="outlined"
          startIcon={<TextSnippetIcon />}
        >
          Via Email Form
        </Button>

        <div className="text-fields">
          {["Name:", "Email:", "Text:"].map((label) => (
            <TextField
              key={label}
              label={label}
              variant="outlined"
              sx={{
                "& .MuiInputLabel-root": {
                  color: "black",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "black",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                    borderWidth: "2px",
                  },
                  "&:hover fieldset": {
                    borderColor: "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                  "&.Mui-focused": {
                    boxShadow: "none",
                  },
                },
              }}
            />
          ))}
        </div>
        <div className="End-button">
          <Button
            style={{ width: "200px", backgroundColor:"black", marginTop:"20px",marginLeft:"214px"}}
            variant="contained"
            startIcon={<TextSnippetIcon />}
          >
            Via Support Chat
          </Button>
        </div>
      </div>
      <div className="container-image">
        <img
          style={{ width: "500px",boxShadow:"none",marginTop:"-60px" ,paddingTop:"-30px"}}
          src="/contactform.png"
          alt="Contact Form Illustration"
        />
      </div>
    </div>
  );
}
