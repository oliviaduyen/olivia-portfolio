<!-- Contact Section -->
<section id="contact" class="section-modern section-dark" data-aos="fade-up">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title text-white">Get In Touch</h2>
            <div class="section-divider"></div>
            <p class="section-subtitle text-white opacity-75">
                I'm always interested in hearing about new opportunities and collaborations.
            </p>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="contact-form-container">
                    <form id="contactForm" action="send_email.php" method="POST" class="contact-form">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" required>
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="email" class="form-control" id="email" name="email" placeholder="Your Email" required>
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" required>
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <textarea class="form-control" id="message" name="message" placeholder="Your Message" style="height: 120px" required></textarea>
                                    <label for="message">Your Message</label>
                                </div>
                            </div>
                            <div class="col-12 text-center">
                                <button type="submit" class="btn btn-primary btn-lg px-5">
                                    <i class="bi bi-send me-2"></i>Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                    <div id="responseMessage" class="alert mt-4 hidden"></div>
                </div>
            </div>
        </div>
    </div>
</section>