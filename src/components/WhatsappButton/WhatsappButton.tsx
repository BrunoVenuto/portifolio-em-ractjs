import styles from './WhatsappButton.module.css'


export const WhatsappButton = () => {

    const number = "5531995453632"
    const messsage = "Olá, quero solicitar um orçamento!"
    const url = `https://wa.me/${number}?text=${encodeURIComponent(messsage)}`

    return(
        <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.button}
        >
            Falar no WhatsApp
        </a>
    )
}