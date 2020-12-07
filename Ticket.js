module.exports = class TicketManager {

    constructor({ categoryID, ticketNameTemplate }) {
        this.categoryID = categoryID;
        this.ticketName = ticketNameTemplate;
    }

    async createTicket({ guild, user }) {
        const { username } = user,
            { id } = guild;
        this.guildID = id;
        if(this.hasTicket(username)) return { error: "Ticket has already created for this user." };
        try {
            const channel = await guild.channels.create(`${this.ticketName}-${username}`, { type: "text" });
            channel.setParent(this.categoryID);
            return channel;
        } catch(error) {
            throw new error;
        }
    }

    async deleteTicket({ user }) {
        try {
            const { username } = user;
            return await this.getTicket(username).delete();
        } catch(error) {
            throw new error;
        }
    }

    hasTicket(username) {
        return this.getTicket(username) != null;
    }

    getTicket(username) {
        return this.guildID.channels.cache.find(({ name }) => name === `${this.ticketName}-${username}`);
    }

};