import contentful from 'contentful';

class ContentfulClient {
  constructor() {
    const space = 'yvri0pfu4lqm';
    const accessToken = '0ed39718c63b563aec3f41f3c071a941f1093b80da198fae5de9d4db0e4b9177';
    const host = 'preview.contentful.com';
    this.client = contentful.createClient({ space, accessToken, host});
  }

  getHomepageSlides() {
    const content_type = 'homepageSlideshow';
    return this.client.getEntries({content_type});
  }

  getHomePageDiagram() {
    const content_type = 'homePageDiagram';
    return this.client.getEntries({content_type});
  }

  getJoin() {
    const content_type = 'joinPage';
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

  getContactPage() {
    const content_type = 'contactPage';
    return this.client.getEntries({content_type});
  }
}

export default ContentfulClient;
