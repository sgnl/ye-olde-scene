
import Layout from '../components/layout'

export default () => {
  return (
    <Layout>
      <form>
        <label>
          name:
          <input type="text" name="name" />
        </label>
        <label>
          bio:
          <textarea name="bio">
          </textarea>
        </label>
        <label>
          tags:
          <input type="text" name="tags" />
        </label>
        <label>
          websites:
          <input type="text" name="websites" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </Layout>
  )
}

/*
  name
  bio
  genres : [3]
  websites [ [k, v], ... ] => k = "social-media-nick", v = "url"

 */