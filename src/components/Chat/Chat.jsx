/* eslint-disable */
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Badge, Card, IconButton, Stack, Box } from '@mui/material';
// import { Message } from 'assets/icons';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

import Close from "@mui/icons-material/Close";
import SendIcon from '@mui/icons-material/Send';
import styles from './Chat.module.scss';

const Chat = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [message, setMessage] = React.useState('');
    const [chats, setChats] = React.useState([]);

    const chatBoxRef = React.useRef(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSend = () => {
        if (message.trim() !== '') {
            const currentTime = new Date();
            const options = { hour: 'numeric', minute: 'numeric' };
            const timeString = currentTime.toLocaleTimeString('id-ID', options);
            const monthString = currentTime.toLocaleString('id-ID', { month: 'long' });
            const dayString = currentTime.toLocaleDateString('id-ID', { day: 'numeric' });
            const yearString = currentTime.toLocaleDateString('id-ID', { year: 'numeric' });
            const formattedTime = `${dayString} ${monthString} ${yearString}, ${timeString}`;
            setChats([...chats, { text: message, sender: 'Yusuf Maulana', time: formattedTime }]);
            setMessage('');
        }
    };


    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    React.useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [chats]);

    return (
        <div>
            <IconButton onClick={handleClick}>
                <Badge
                    color="error"
                    variant="dot"
                    badgeContent={chats.length}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}>
                    <ChatOutlinedIcon className={styles["icon-chat"]} />

                </Badge>
            </IconButton>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}

            >
                <Box display="flex" flexDirection="column" height="100%" className={styles["box-chat-size"]}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: '8px' }}>
                        <IconButton size="small" onClick={handleClose}>
                            <Close />
                        </IconButton>
                    </Box>
                    <Box flex="1" sx={{ maxHeight: '250px', overflowY: 'auto' }} ref={chatBoxRef}>

                        {chats.map((chat, index) => (
                            <Box key={index} sx={{ my: '8px', display: 'flex', flexDirection: 'column', alignItems: chat.sender === 'Yusuf Maulana' ? 'flex-end' : 'flex-end' }} className={styles["list-note-wrapper"]}>
                                <Typography sx={{ mb: '4px', alignSelf: 'flex-end' }} className={styles["bubble-chat"]}>
                                 {chat.sender}
                                </Typography>
                                <Typography sx={{ mb: '4px', alignSelf: 'flex-end' }} className={styles["time-chat"]}>
                                    {chat.time}
                                </Typography>
                                <Stack direction={chat.sender === 'Yusuf Maulana' ? 'row-reverse' : 'row'} className={styles["bubble-chat"]}>
                                    <Card
                                        sx={{
                                            py: '8px',
                                            px: '12px',
                                            borderRadius: '8px',
                                            bgcolor: chat.sender === 'Yusuf Maulana' ? '#f0d000' : 'grey.200',
                                            color: chat.sender === 'Yusuf Maulana' ? 'black' : 'inherit',

                                        }}
                                        className={styles['chat-text']}
                                    >
                                        <Typography variant="body2" >{chat.text}</Typography>
                                    </Card>
                                </Stack>
                            </Box>
                        ))}


                    </Box >
                    <Box sx={{ display: 'flex', alignItems: 'center', p: '16px' }} className={styles["send-box-chat"]}>
                        <input
                            type="teks"
                            variant="outlined"
                            size="small"
                            placeholder=" Masukan Pesan Disini ... "
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            onKeyDown={(event) => {
                                if (event.keyCode === 13) {
                                    handleSend();
                                }
                            }}
                            sx={{ flex: '1', mr: '16px' }}
                            className={styles["message-field"]}
                        />
                        <Button variant="contained" onClick={handleSend} disabled={message.trim() === ''} style={{ backgroundColor: "#4FD955" }} className={styles["send-button"]}>
                            <SendIcon />
                        </Button>
                    </Box>
                </Box>
            </Popover>

        </div>
    );
};

export default Chat;