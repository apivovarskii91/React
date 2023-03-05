import {
    Button,
    Card,
    CardContent,
    TextareaAutosize,
    TextField,
} from '@mui/material'
import Typography from '@mui/material/Typography'
import { type } from 'os'
import React, { useState } from 'react'

type Props = {}

type Review = {
    name: string
    text: string
}
const Reviews = (props: Props) => {
    const arrReviews = [
        {
            name: 'Ольга',
            text: 'Брали телефон чоловіку. Дуже задоволений!! Варто брати, якщо ви хочете обновити свій наприклад 8й чи 11й айфон.Швидкий, батарея гарно тримає. ',
        },
        {
            name: 'Макс',
            text: 'Дуже продуктивний телефон, всі відповідає всім моїм вимогам. Це дійсно гарна ріс',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)

    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }
    const sendReview = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setReviews((prevState) => {
            return [...prevState, newReview]
        })

        setNewReview({
            name: '',
            text: '',
        })
    }
    return (
        <div>
            <Typography variant="h4" component="h2" sx={{ margin: '30px 0' }}>
                Reviews
            </Typography>
            {reviews.map((item, i) => (
                <Card variant="outlined" sx={{ margin: '30px 0' }} key={i}>
                    <CardContent>
                        <div>{item.name}:</div>
                        <div>{item.text}</div>
                    </CardContent>
                </Card>
            ))}
            <form onSubmit={sendReview}>
                <h3>Please leave a review</h3>
                <div>
                    <TextField
                        label="Your name"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        minRows={7}
                        placeholder="Your text"
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <Button variant="outlined" type="submit">
                    Send
                </Button>
            </form>
        </div>
    )
}
export default Reviews
