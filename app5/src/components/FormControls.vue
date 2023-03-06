<script></script>

<template>
    <div class="container">
        <form id="form" action="#">
            <div class="row mt-5 text-end">
                    <div class="col p-0">
                        <label id="searchLabel" for="search">Search</label>
                        <input id="search" type="search" name="q">
                    </div>
            </div>
            <hr>

            <fieldset class="border shadow mb-4 rounded mt-3 p-3" id="description">
                <div class="row">
                    <div class="col-xs-0 col-lg-2"></div>

                    <div class="col">
                        <div class="row">
                            <div class="col">   
                                <legend>Sign Up</legend>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h2>Account Settings</h2>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col">
                                <label for="firstName">First Name</label><br>
                                <input type="text" id="firstName" name="firstName" required>
                            </div>
                            <div class="col">
                                <label for="lastName">Last Name</label><br>
                                <input type="text" id="lastName" name="lastName" required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <label for="email">Email</label><br>
                                <input type="email" required id="email" name="email">
                            </div>
                            <div class="col">
                                <label for="tel">Telephone</label><br>
                                <input type="tel" id="tel" name="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="e.g. 123-456-7890" required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <label for="url">Website URL</label><br>
                                <input type="url" id="url" name="url" placeholder="https://example.com" pattern="https://.*" required>
                            </div>
                            <div class="col">
                                <label for="password">Password</label><br>
                                <input type="password" id="password" name="password">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <label for="description">Biography</label><br>
                                <textarea name="description" id="description" cols="54"></textarea>
                            </div>
                        </div>
                        <hr>

                        <div class="row">
                            <div class="col">
                                <h2>App Settings</h2>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <p class="pseudo-label">Select App Mode</p>
                                <input type="radio" id="light" name="mode" value="light" checked>
                                <label class="pseudo-text" for="light">light mode</label><br>
                                
                                <input type="radio" id="dark" name="mode" value="dark">
                                <label class="pseudo-text" for="dark">dark mode</label>
                            </div>
                            <div class="col">
                                <p class="pseudo-label">Receive Notications</p>
                                <input type="checkbox" id="likes">
                                <label class="pseudo-text" for="likes">Likes</label> <br>

                                <input type="checkbox" id="comments">
                                <label class="pseudo-text" for="comments">Comments</label>
                            </div>
                        </div>
                        <hr>

                        <div class="row">
                            <div class="col">
                                <h2>Job Search</h2>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <label for="accountType">Account Type</label><br>
                                <input list="accounts" id="accountType" name="accountType" required>
                                <datalist id="accounts">
                                    <option value="Business">Business</option>
                                    <option value="Personal">Personal</option>
                                    <option value="School">School</option>
                                </datalist>
                            </div>
                            <div class="col">
                                <label for="jobType">Job Type</label><br>
                                <select name="jobType" id="jobType" required>
                                    <option value="">--choose type--</option>
                                    <option value="part-time">part-time</option>
                                    <option value="full-time">full-time</option>
                                    <option value="internship">intership</option>
                                </select>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col form-outline">
                                <label class="form-label" for="miles">Distance (miles)</label><br> 
                                <input type="number" id="miles" name="miles" min="5" max="5000">
                            </div>
                            <div class="col">
                                <label for="companySize">Desired Company Size</label><br>
                                <input type="range" id="companySize" name="companySize">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <label for="startDate">Start Date</label><br>
                                <input type="date" id="startDate" name="startDate" min="2023-02-30" required>
                            </div>
                            <div class="col">
                                    <label for="startTime">Start Time</label><br>
                                    <input type="time" id="startTime" name="startTime" min="09:00" max="16:00" required>
                            </div>
                        </div>

                        <div class="row">
                               <div class="col">
                                    <label for="meeting">Meet with Recruiter</label><br>
                                    <input type="datetime-local" id="meeting" name="meeting" min="2023-02-15T08:00">
                               </div> 
                               <div class="col">
                                    <label for="file">Upload Resume</label><br>
                                    <input class="form-control" type="file" id="file" name="file" accept=".doc,.docx,.pdf">
                               </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <label for="bannerColor">Banner Color</label><br>
                                <input type="color" id="bannerColor" name="bannerColor" value="#e66465" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label for="progress">Saving</label><br>
                                <progress id="progress"></progress>
                            </div>
                            <div class="col">
                                <label for="rating">Services Rating </label><br>
                                <meter id="rating" min="0" max="100" low="30" optimum="60" high="90" value="80"></meter><span>4/5</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-0 col-lg-2"></div>
                </div>
            </fieldset>
            <div class="row">
                <div class="col text-center">
                    <button class="btn btn-primary mb-5 " type="submit">Submit</button>
                </div>
            </div>
        </form>
    </div>

</template>

<style>
    #form {
        padding: 0 100px;
    }
    .row{ 
        margin: 15px 0;
    }
    #searchLabel, #light, #dark, #likes, #comments, #rating {
        margin-right: 5px;
    }
    p {
        margin-bottom: 0;
    }
    label, .pseudo-label {
        color: #6c6c6c;
    }
    .pseudo-text {
        color: black;
    }
    legend {
        font-size: 2.25rem;
    }
    h2 {
        font-size: 1.5rem;
    }

</style>