import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Link as LinkRouter } from 'react-router-dom'


export default function Card({filterCard}) {

    return( 
            <ImageList sx={{ gap: '40px!important',  marginLeft: "15%", width: "70%" }}>

                <ImageListItem key="Subheader" cols={2}>
                   
                </ImageListItem>
                {filterCard.map((item) => (
                    <ImageListItem key={item.image}>
                        <img className='img-cities1'
                            src={`${item.image}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.name}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.name}
                            subtitle={item.country}
                            actionIcon={
                                <LinkRouter to={`/CitiesDetails/${item._id}`}>
                                    <IconButton
                                        sx={{ color: '#E65100' }}
                                        aria-label={`info about ${item.name}`}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                </LinkRouter>
                            }
                        />
                    </ImageListItem>
                ))}

            </ImageList>
            );
        }