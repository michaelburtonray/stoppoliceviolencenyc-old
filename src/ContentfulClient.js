import contentful from 'contentful';

class ContentfulClient {
  constructor() {

    const space = 'yvri0pfu4lqm';
    const accessToken = '0ed39718c63b563aec3f41f3c071a941f1093b80da198fae5de9d4db0e4b9177';
    const host = 'preview.contentful.com';

    this.client = contentful.createClient({ space, accessToken, host});

    this.client.getEntries()
      .then((response) => {
        console.log('\x1b[32m Here are the first 100 entry IDs of your space .\n')
        console.log(response.items.map((item) => '\x1b[32m \t> ' + item.sys.id).join('\n'))
        console.log('\n \x1b[32m Want to go further? Feel free to check out this guide: \x1b[34m\x1b[4mhttps://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/')
      })
      .catch((error) => {
        console.log('\x1b[31merror occured')
        console.log(error)
      })
  }

  getHomepageSlides() {
    const content_type = 'homepageSlideshow';

    return this.client.getEntries({content_type});
  }

  getFaq() {
    const content_type = 'frequentlyAskedQuestions';

    return this.client.getEntries({content_type});
  }

  getLegislationPage() {
    const content_type = 'legislationPage';

    return this.client.getEntries({content_type});
  }
}

export default ContentfulClient;
