import prismaDb from '@/prisma/prismaDb';

const getMessages = async () => {
    const messages = await prismaDb.message.findMany();

    return messages;
};

type MessageType = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
    createdAt: Date;
};

const Message = async () => {
    const messages: MessageType[] = await getMessages();

    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                {messages.map((message) => (
                    <tr key={message.id}>
                        <td>{message.id}</td>
                        <td>{message.firstName}</td>
                        <td>{message.lastName}</td>
                        <td>{message.email}</td>
                        <td>{message.subject}</td>
                        <td>{message.message}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

Message.propTypes = {};

export default Message;
