import { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import axios from '@/lib/axios'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import InfoIcon from '@mui/icons-material/Info'
import Typography from '@mui/material/Typography'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useForm, Controller } from 'react-hook-form'

export default function Form(props) {
    const [pending, setPending] = useState(false)
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            product: '',
        },
    })

    const onSubmit = async data => {
        setPending(true)
        try {
            const res = await axios.post('/api/leads', data)
            alert(res.data.message)
        } catch (error) {
            console.log(error)
            alert('משהו השתבש, נסה שוב מאוחר יותר')
        }
        setPending(false)
    }
    return (
        <>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage:
                            'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: t =>
                            t.palette.mode === 'light'
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <InfoIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            השאר פרטים ונחזור אליך בהקדם
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit(onSubmit)}
                            sx={{ mt: 1 }}>
                            <Controller
                                name="name"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        margin="normal"
                                        fullWidth
                                        id="name"
                                        label="שם מלא"
                                        autoFocus
                                        error={!!errors.name}
                                    />
                                )}
                            />
                            {errors.name &&
                                errors?.name.type === 'required' &&
                                'שם הוא שדה חובה'}
                            <Controller
                                name="phone"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        margin="normal"
                                        fullWidth
                                        label="מספר טלפון"
                                        type="telephone"
                                        id="phone"
                                    />
                                )}
                            />
                            {errors.name &&
                                errors?.phone.type === 'required' &&
                                'מספר טלפון הוא שדה חובה'}
                            <Controller
                                name="email"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <TextField
                                        margin="normal"
                                        {...field}
                                        fullWidth
                                        id="email"
                                        label={`כתובת דוא"ל`}
                                        autoComplete="email"
                                    />
                                )}
                            />
                            {errors.email &&
                                errors?.phone.type === 'required' &&
                                'דוא"ל הוא שדה חובה'}
                                <br />
                                <br />
                            <label>אנא בחר מוצר מהרישמה *</label>
                            <Controller
                                rules={{ required: true }}
                                name="product"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        placeholder="אנא בחר מוצר"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Age"
                                        fullWidth>
                                        {props?.products.map(product => (
                                            <MenuItem
                                                key={product.id}
                                                value={product.name}>
                                                {product.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                )}
                            />
                            <br />
                            {errors.item &&
                                errors?.phone.type === 'required' &&
                                'דוא"ל הוא שדה חובה'}

                            <Button
                                disabled={!!pending}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}>
                                שליחה
                            </Button>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                align="center">
                                פרוייקט זה נבנה כמשימת בית ל waves-projects
                                {'.'}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
