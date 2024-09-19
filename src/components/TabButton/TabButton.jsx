export default function TabButton({ children, isSelected, ...props}) {

    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...props}>{ children }</button>
        </li>); //si riferisce al testo che scrivi quando richiami il component <TabButton>Example</TabButton> Mostrerà la parola Example puoi farlo normalmente con i soliti metodi dei props....ma così è un altro modo
}
