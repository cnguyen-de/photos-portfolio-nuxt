export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email } = body ?? "anon"
  return email === "bichbui@gmail.com" || email === "minhchi1211@gmail.com" ? { isAdmin: true } : { isAdmin: false }
})
