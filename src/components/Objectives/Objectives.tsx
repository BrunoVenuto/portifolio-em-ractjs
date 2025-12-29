import Image from "next/image"
import styles from './Objectives.module.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";



export const Objective = () => {
    return(
        <div className={styles.container}>
            <div className={styles.Objective}>
                <div>
                    <Image 
                        src="/images/programa.jpg"
                        alt="imagem"
                        width={420}
                        height={420}
                        className={styles.imageLogo}
                    />
                </div>
                <div className={styles.Info}>
                    <h2>Minha Abordagem</h2>
                    <h3>Iterativo</h3>
                    <p>Adoto uma abordagem iterativa no meu trabalho 
                        para que o resultado final se alinhe à sua visão
                        criativa e reflita a identidade exclusiva da sua 
                        marca. Trabalharemos juntos para refinar e ajustar
                        o design do seu site, sem deixar 
                        nenhum detalhe de lado.
                    </p>
                    <h2 className={styles.texth2}>Minhas Skins</h2>
                    <div className={styles.imageSize}>
                        <FaHtml5 size={130} color="red"/> 
                        <FaCss3Alt size={130} color="blue"/> 
                        <DiJavascript size={130} color="yellow" />
                        <FaReact size={130} color="blue" /> 
                    </div>
                </div>
                
            </div>
        </div>
    )
}