import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from '@mui/material/Link'; 
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import { useCookies } from 'react-cookie'
const theme = createTheme();

export default function SignInSide() {

    const [cookies, setCookie, removeCookie] = useCookies(['id'])
    const handleCookie = (id, pw,name) => {
        const expireDate = new Date()
        expireDate.setMinutes(expireDate.getMinutes() + 180)
        setCookie(
          'id',
          id,
          {
            path: '/',
            expires: expireDate,
          }
        )
        setCookie(
            'pw',
            pw,
            {
              path: '/',
              expires: expireDate,
            }
          )
          setCookie(
            'name',
            name,
            {
              path: '/',
              expires: expireDate,
            }
          )
      }

const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    fetch("http://localhost:8080/login/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: data.get('email'),
          password: data.get('password'),
        }),
      })
        .then(async (res) => {
          const data2 = await res.json();
          console.log(data2)
          handleCookie(data2.login_id, data2.login_pw, data2.name)
          location.href = "./home";
        })
        .catch((err) => {
          console.log(err.message);
          alert("로그인 정보가 일치하지 않습니다!");
        });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="아이디"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              herf='./home'
            >
              로그인
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link href="./signup" variant="body2">
                  {"계정이 없으신가요?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
