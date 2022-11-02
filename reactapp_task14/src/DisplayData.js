import React from 'react';
import { useRecoilState } from 'recoil';
import { atomData } from './recoil/atomData';
import { UserInput } from './UserInput';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import ClipLoader from "react-spinners/ClipLoader";

export const DisplayData = () => {

    const [list, setList] = useRecoilState(atomData);

    const deleteCard = (s, id) => {
        const filterList = list.filter((info => info.id !== id));
        setList(filterList);
    }

    return (
        <>
            <br></br><br></br>
            <UserInput />
            <br></br><br></br><br></br>
            {list.length > 0 ? (list.map(info => {
                return (
                    <React.Fragment key={info.id}>
                    <Card sx={{ display: 'inline-block', mx: '3px', maxWidth: '350' }} id="todocard">
                    <CardContent>
                    <Typography sx={{ fontSize: 20 }} color="black" gutterBottom>
                    ID: {info.id}
                    </Typography>
                    <Typography sx={{ fontSize: 20 }} color="black">
                    Item: {info.text}                   
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick = {event => deleteCard(event, info.id)} startIcon={<DeleteIcon />}>Delete</Button>
                    </CardActions>
                    </Card>
                    </React.Fragment>
                )
            }
            )) : (<p>
                    <ClipLoader
                    color={'rgba(0, 0, 0, 0.325)'}
                    loading={true}
                    size={100}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    />
                </p>)}

            
        </>
    )
}