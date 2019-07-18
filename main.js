// In your HTML, define an `<article>` element with an id of `contactList`
// 2. Create a function called `createContact`.  The function should return a new object with three properties: `name`, `title`, `email`.
// 3. Design `createContact` to accept three arguments, which will be used to make the object.

const createContact = (name, title, email) => ({
    name, title, email
})

const htmlInfo = document.querySelector('#contactList')


const displyContact = (contact) => {
    const displyContactDom =
        `<section class="contact">
            <h1 class="contactName">
                Name: ${contact.name}
            </h1>
            <h2 class="contactJob">
                Job: ${contact.title}
            </h2>
            <div class="contactEmail">
                Email: ${contact.email}
            </div>
        </section>
        `
    htmlInfo.innerHTML += displyContactDom
}

const john = createContact(
    'John Smith', 'Manager', 'john@smith.com')
const Amber = createContact(
    'Amber Smith', 'Supervisor', 'Amber@smith.com')
const ram = createContact(
    'Ram Smith', 'Stripper', 'ramStrip@smith.com')
const luke = createContact(
    'Luke Smith', 'Singer', 'luke@smith.com')
const brit = createContact(
    'Brit Smith', 'Dancer', 'brit@smith.com')

displyContact(john)
displyContact(Amber)
displyContact(ram)
displyContact(luke)
displyContact(brit)

